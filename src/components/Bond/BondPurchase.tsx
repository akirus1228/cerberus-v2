import { useDispatch, useSelector } from 'react-redux';
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Slide, Typography, } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useCallback, useEffect, useState } from 'react';

import ConnectWalletButton from '../Nav/ConnectWalletButton';
import { useWeb3Context } from '../../core/hooks/web3Context';
import { useDebounce } from '../../core/hooks/base';
import { BaseInfo, BaseInfoKey } from '../../core/interfaces/base';
import { RootState } from '../../core/store/store';
import { bondAsset, calcBondDetails, changeApproval } from '../../core/store/slices/bondSlice';
import { isPendingTxn, txnButtonText } from '../../core/store/slices/pendingTxSlice';
import { error } from '../../core/store/slices/messageSlice';
import { prettifySeconds, secondsUntilBlock, shorten, formatNumber } from '../../core/utils/base';
import { SECONDS_TO_REFRESH } from '../../core/data/base';

const defaultNetworkBaseInfos: BaseInfo[] = [
  {
    name: 'Your Balance',
    value: null,
    key: BaseInfoKey.OwnerBalance
  },
  {
    name: 'You Will Get',
    value: null,
    key: BaseInfoKey.NextRewardAmount
  },
  {
    name: 'Max You Can Buy',
    value: null,
    key: BaseInfoKey.ThreeDogsBalance,
  }, {
    name: 'ROI',
    value: null,
    key: BaseInfoKey.Roi
  },
  {
    name: 'Debt Ratio',
    value: null,
    key: BaseInfoKey.DebtRate
  },
  {
    name: 'Vesting Term',
    value: null,
    key: BaseInfoKey.FiveDaysRate,
  },

]

function BondPurchase({bond, slippage, recipientAddress}) {
  const dispatch = useDispatch();
  const {provider, address, chainID} = useWeb3Context();
  const [networkBaseInfos, setNetworkBaseInfos] = useState(defaultNetworkBaseInfos);
  const [secondsToRefresh, setSecondsToRefresh] = useState(SECONDS_TO_REFRESH);
  const [quantity, setQuantity] = useState(null);

  const currentBlock = useSelector((state: RootState) => {
    return state.app.currentBlock;
  });
  const isBondLoading = useSelector((state: RootState) => state.bonding.loading ?? true);
  const pendingTransactions = useSelector((state: RootState) => {
    return state.pendingTx;
  });

  const vestingPeriod = () => {
    const vestingBlock = parseInt(currentBlock) + parseInt(bond.vestingTerm);
    const seconds = secondsUntilBlock(currentBlock, vestingBlock);
    return prettifySeconds(seconds, 'day');
  };

  const onBond = async () => {
    if (quantity === null) {
      dispatch(error('Please enter a value!'));
    } else if (isNaN(quantity)) {
      dispatch(error('Please enter a valid value!'));
    } else if (bond.interestDue > 0 || bond.pendingPayout > 0) {
      const shouldProceed = window.confirm(
        'You have an existing bond. Bonding will reset your vesting period and forfeit rewards. We recommend claiming rewards first or using a fresh wallet. Do you still want to proceed?',
      );
      if (shouldProceed) {
        await dispatch(
          bondAsset({
            value: quantity,
            slippage,
            bond,
            networkID: chainID,
            provider,
            address: recipientAddress || address,
          }),
        );
      }
    } else {
      await dispatch(
        bondAsset({
          value: quantity,
          slippage,
          bond,
          networkID: chainID,
          provider,
          address: recipientAddress || address,
        }),
      );
      clearInput();
    }
  }

  const clearInput = () => {
    setQuantity(0);
  };

  const hasAllowance = useCallback(() => {
    return bond.allowance > 0;
  }, [bond.allowance]);

  const setMax = () => {
    setQuantity(bond.balance);
  };

  const bondDetailsDebounce = useDebounce(quantity, 1000);
  const onSeekApproval = async () => {
    dispatch(changeApproval({address, bond, provider, networkID: chainID}));
  };
  const isAllowanceDataLoading = bond.allowance == null;

  useEffect(() => {
    dispatch(calcBondDetails({bond, value: quantity, provider, networkID: chainID}));
  }, [bondDetailsDebounce]);

  useEffect(() => {
    let interval = null;
    if (secondsToRefresh > 0) {
      interval = setInterval(() => {
        setSecondsToRefresh(secondsToRefresh => secondsToRefresh - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      dispatch(calcBondDetails({bond, value: quantity, provider, networkID: chainID}));
      setSecondsToRefresh(SECONDS_TO_REFRESH);
    }
    return () => clearInterval(interval);
  }, [secondsToRefresh, quantity]);

  useEffect(() => {
    const infos = defaultNetworkBaseInfos;
    infos.forEach((info: BaseInfo) => {
      switch (info.key) {
        case BaseInfoKey.OwnerBalance:
          if (bond.balance) {
            info.value = `${Number(formatNumber(bond.balance, 4))}${bond.displayUnits}`;
          }
          break;
        case BaseInfoKey.NextRewardAmount:
          if (bond.bondQuote) {
            info.value = `${new Intl.NumberFormat('en-US').format(Number(formatNumber(bond.bondQuote, 4)))}3DOG`;
          }
          break;
        case BaseInfoKey.ThreeDogsBalance:
          if (bond.maxBondPrice) {
            info.value = `${new Intl.NumberFormat('en-US').format(Number(formatNumber(bond.maxBondPrice, 4)))}3DOG`;
          }
          break;
        case BaseInfoKey.Roi:
          if (bond.bondDiscount) {
            info.value = `${new Intl.NumberFormat('en-US').format(Number(formatNumber(bond.bondDiscount * 100, 2)))}%`;
          }
          break;
        case BaseInfoKey.DebtRate:
          if (bond.debtRatio) {
            info.value = `${new Intl.NumberFormat('en-US').format(Number(formatNumber(bond.debtRatio * 10000000, 4)))}%`;
          }
          break;
        case BaseInfoKey.FiveDaysRate:
          if (bond.vestingTerm) {
            info.value = vestingPeriod();
          }
          break;
        default:
          break;
      }
    });
    setNetworkBaseInfos([...infos]);
  }, [bond]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-around flex-wrap">
        {!address ? (
          <ConnectWalletButton className="text-20 font-semibold"/>
        ) : (
          <>
            {isAllowanceDataLoading ? (
              <Skeleton width="200px"/>
            ) : (
              <>
                {!hasAllowance() ? (
                  <div className="my-10">
                    <em>
                      <Typography variant="body1" align="center" color="textSecondary">
                        First time bonding <b>{bond.displayName}</b>? <br/> Please approve CebrerusDAO to use your{' '}
                        <b>{bond.displayName}</b> for bonding.
                      </Typography>
                    </em>
                  </div>
                ) : (
                  <FormControl className="w-full min-w-1/2 max-w-410 m-5" variant="outlined" color="primary">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      type="number"
                      value={quantity}
                      onChange={e => setQuantity(e.target.value)}
                      labelWidth={55}
                      endAdornment={
                        <InputAdornment position="end">
                          <Button variant="text" onClick={setMax}>
                            Max
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                )}

                {!bond.isAvailable[chainID] ? (
                  <Button
                    variant="contained"
                    color="primary"
                    id="bond-btn"
                    className="min-w-185 max-w-410 w-full m-5"
                    disabled={true}
                  >
                    Sold Out
                  </Button>
                ) : hasAllowance() ? (
                  <Button
                    variant="contained"
                    color="primary"
                    id="bond-btn"
                    className="min-w-185 max-w-410 w-full m-5"
                    disabled={isPendingTxn(pendingTransactions, 'bond_' + bond.name)}
                    onClick={onBond}
                  >
                    {txnButtonText(pendingTransactions, 'bond_' + bond.name, 'Bond')}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    id="bond-approve-btn"
                    className="min-w-185 max-w-410 w-full m-5"
                    disabled={isPendingTxn(pendingTransactions, 'approve_' + bond.name)}
                    onClick={onSeekApproval}
                  >
                    {txnButtonText(pendingTransactions, 'approve_' + bond.name, 'Approve')}
                  </Button>
                )}
              </>
            )}{' '}
          </>
        )}
      </div>

      <Slide direction="left" in={true} mountOnEnter unmountOnExit {...{timeout: 533}}>
        <div className="mt-10 px-10">
          {
            networkBaseInfos.map((info: BaseInfo, index) => {
              return (
                <div className="flex justify-between mt-5 items-center" key={index}>
                  <Typography className="font-normal">{info.name}</Typography>
                  <div>
                    {!info.value ? (
                      <Skeleton width="100px"/>
                    ) : (
                      <Typography variant="h5" color="primary" className="text-center">
                        {info.value}
                      </Typography>
                    )}
                  </div>
                </div>
              )
            })}
          {recipientAddress !== address && (
            <div className="flex justify-between my-10">
              <Typography>Recipient</Typography>
              <Typography>{isBondLoading ? <Skeleton width="100px"/> : shorten(recipientAddress)}</Typography>
            </div>
          )}
        </div>
      </Slide>
    </div>
  );
}

export default BondPurchase;
