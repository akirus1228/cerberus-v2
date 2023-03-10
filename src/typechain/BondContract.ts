import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import {
  ethers,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';

import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../core/interfaces/typechain';

export interface BondContractInterface extends ethers.utils.Interface {
  functions: {
    'DAO()': FunctionFragment;
    'DAOShare()': FunctionFragment;
    'LP()': FunctionFragment;
    'OHM()': FunctionFragment;
    'bondCalculator()': FunctionFragment;
    'bondInfo(address)': FunctionFragment;
    'bondPrice()': FunctionFragment;
    'bondPriceInDAI()': FunctionFragment;
    'bondPriceWithoutFloor()': FunctionFragment;
    'circulatingOHMContract()': FunctionFragment;
    'controlVariable()': FunctionFragment;
    'debtRatio()': FunctionFragment;
    'deposit(uint256,uint256,address)': FunctionFragment;
    'distributor()': FunctionFragment;
    'manager()': FunctionFragment;
    'maxPayout()': FunctionFragment;
    'maxPayoutPercent()': FunctionFragment;
    'minimumPrice()': FunctionFragment;
    'payoutFor(uint256)': FunctionFragment;
    'pendingPayoutFor(address)': FunctionFragment;
    'percentVestedFor(address)': FunctionFragment;
    'pullManagement()': FunctionFragment;
    'pushManagement(address)': FunctionFragment;
    'recoverLostToken(address)': FunctionFragment;
    'redeem()': FunctionFragment;
    'renounceManagement()': FunctionFragment;
    'setBondTerm(uint256,uint256,uint256,uint256,uint256)': FunctionFragment;
    'totalDebt()': FunctionFragment;
    'treasury()': FunctionFragment;
    'vestingTerm()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'DAO', values?: undefined): string;

  encodeFunctionData(functionFragment: 'DAOShare', values?: undefined): string;

  encodeFunctionData(functionFragment: 'LP', values?: undefined): string;

  encodeFunctionData(functionFragment: 'OHM', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'bondCalculator',
    values?: undefined
  ): string;

  encodeFunctionData(functionFragment: 'bondInfo', values: [string]): string;

  encodeFunctionData(functionFragment: 'bondPrice', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'bondPriceInDAI',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'bondPriceWithoutFloor',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'circulatingOHMContract',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'controlVariable',
    values?: undefined
  ): string;

  encodeFunctionData(functionFragment: 'debtRatio', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'deposit',
    values: [BigNumberish, BigNumberish, string]
  ): string;

  encodeFunctionData(
    functionFragment: 'distributor',
    values?: undefined
  ): string;

  encodeFunctionData(functionFragment: 'manager', values?: undefined): string;

  encodeFunctionData(functionFragment: 'maxPayout', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'maxPayoutPercent',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'minimumPrice',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'payoutFor',
    values: [BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'pendingPayoutFor',
    values: [string]
  ): string;

  encodeFunctionData(
    functionFragment: 'percentVestedFor',
    values: [string]
  ): string;

  encodeFunctionData(
    functionFragment: 'pullManagement',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'pushManagement',
    values: [string]
  ): string;

  encodeFunctionData(
    functionFragment: 'recoverLostToken',
    values: [string]
  ): string;

  encodeFunctionData(functionFragment: 'redeem', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'renounceManagement',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'setBondTerm',
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  encodeFunctionData(functionFragment: 'totalDebt', values?: undefined): string;

  encodeFunctionData(functionFragment: 'treasury', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'vestingTerm',
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: 'DAO', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'DAOShare', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'LP', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'OHM', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'bondCalculator',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'bondInfo', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'bondPrice', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'bondPriceInDAI',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'bondPriceWithoutFloor',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'circulatingOHMContract',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'controlVariable',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'debtRatio', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'distributor',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'manager', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'maxPayout', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'maxPayoutPercent',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'minimumPrice',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'payoutFor', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'pendingPayoutFor',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'percentVestedFor',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'pullManagement',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'pushManagement',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'recoverLostToken',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'renounceManagement',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'setBondTerm',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'totalDebt', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'treasury', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'vestingTerm',
    data: BytesLike
  ): Result;

  events: {
    'OwnershipPulled(address,address)': EventFragment;
    'OwnershipPushed(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipPulled'): EventFragment;

  getEvent(nameOrSignatureOrTopic: 'OwnershipPushed'): EventFragment;
}

export type OwnershipPulledEvent = TypedEvent<[string, string],
  { previousOwner: string; newOwner: string }>;

export type OwnershipPulledEventFilter = TypedEventFilter<OwnershipPulledEvent>;

export type OwnershipPushedEvent = TypedEvent<[string, string],
  { previousOwner: string; newOwner: string }>;

export type OwnershipPushedEventFilter = TypedEventFilter<OwnershipPushedEvent>;

export interface BondContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;

  attach(addressOrName: string): this;

  deployed(): Promise<this>;

  interface: BondContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;

  listeners(eventName?: string): Array<Listener>;

  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;

  removeAllListeners(eventName?: string): this;

  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DAO(overrides?: CallOverrides): Promise<[string]>;

    DAOShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    LP(overrides?: CallOverrides): Promise<[string]>;

    OHM(overrides?: CallOverrides): Promise<[string]>;

    bondCalculator(overrides?: CallOverrides): Promise<[string]>;

    bondInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      valueRemaining: BigNumber;
      payoutRemaining: BigNumber;
      lastBlock: BigNumber;
      vestingPeriod: BigNumber;
      pricePaid: BigNumber;
    }>;

    bondPrice(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _price: BigNumber }>;

    bondPriceInDAI(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _price: BigNumber }>;

    bondPriceWithoutFloor(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _price: BigNumber }>;

    circulatingOHMContract(overrides?: CallOverrides): Promise<[string]>;

    controlVariable(overrides?: CallOverrides): Promise<[BigNumber]>;

    debtRatio(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _debtRatio: BigNumber }>;

    deposit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributor(overrides?: CallOverrides): Promise<[string]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    maxPayout(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxPayoutPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    payoutFor(
      value_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pendingPayoutFor(
      depositor_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _pendingPayout: BigNumber }>;

    percentVestedFor(
      depositor_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _percentVested: BigNumber }>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recoverLostToken(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeem(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBondTerm(
      controlVariable_: BigNumberish,
      vestingTerm_: BigNumberish,
      minPrice_: BigNumberish,
      maxPayout_: BigNumberish,
      DAOShare_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    vestingTerm(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DAO(overrides?: CallOverrides): Promise<string>;

  DAOShare(overrides?: CallOverrides): Promise<BigNumber>;

  LP(overrides?: CallOverrides): Promise<string>;

  OHM(overrides?: CallOverrides): Promise<string>;

  bondCalculator(overrides?: CallOverrides): Promise<string>;

  bondInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    valueRemaining: BigNumber;
    payoutRemaining: BigNumber;
    lastBlock: BigNumber;
    vestingPeriod: BigNumber;
    pricePaid: BigNumber;
  }>;

  bondPrice(overrides?: CallOverrides): Promise<BigNumber>;

  bondPriceInDAI(overrides?: CallOverrides): Promise<BigNumber>;

  bondPriceWithoutFloor(overrides?: CallOverrides): Promise<BigNumber>;

  circulatingOHMContract(overrides?: CallOverrides): Promise<string>;

  controlVariable(overrides?: CallOverrides): Promise<BigNumber>;

  debtRatio(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    amount_: BigNumberish,
    maxPremium_: BigNumberish,
    depositor_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributor(overrides?: CallOverrides): Promise<string>;

  manager(overrides?: CallOverrides): Promise<string>;

  maxPayout(overrides?: CallOverrides): Promise<BigNumber>;

  maxPayoutPercent(overrides?: CallOverrides): Promise<BigNumber>;

  minimumPrice(overrides?: CallOverrides): Promise<BigNumber>;

  payoutFor(
    value_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pendingPayoutFor(
    depositor_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  percentVestedFor(
    depositor_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pullManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushManagement(
    newOwner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recoverLostToken(
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeem(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBondTerm(
    controlVariable_: BigNumberish,
    vestingTerm_: BigNumberish,
    minPrice_: BigNumberish,
    maxPayout_: BigNumberish,
    DAOShare_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

  treasury(overrides?: CallOverrides): Promise<string>;

  vestingTerm(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DAO(overrides?: CallOverrides): Promise<string>;

    DAOShare(overrides?: CallOverrides): Promise<BigNumber>;

    LP(overrides?: CallOverrides): Promise<string>;

    OHM(overrides?: CallOverrides): Promise<string>;

    bondCalculator(overrides?: CallOverrides): Promise<string>;

    bondInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      valueRemaining: BigNumber;
      payoutRemaining: BigNumber;
      lastBlock: BigNumber;
      vestingPeriod: BigNumber;
      pricePaid: BigNumber;
    }>;

    bondPrice(overrides?: CallOverrides): Promise<BigNumber>;

    bondPriceInDAI(overrides?: CallOverrides): Promise<BigNumber>;

    bondPriceWithoutFloor(overrides?: CallOverrides): Promise<BigNumber>;

    circulatingOHMContract(overrides?: CallOverrides): Promise<string>;

    controlVariable(overrides?: CallOverrides): Promise<BigNumber>;

    debtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<string>;

    manager(overrides?: CallOverrides): Promise<string>;

    maxPayout(overrides?: CallOverrides): Promise<BigNumber>;

    maxPayoutPercent(overrides?: CallOverrides): Promise<BigNumber>;

    minimumPrice(overrides?: CallOverrides): Promise<BigNumber>;

    payoutFor(
      value_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingPayoutFor(
      depositor_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    percentVestedFor(
      depositor_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pullManagement(overrides?: CallOverrides): Promise<void>;

    pushManagement(newOwner_: string, overrides?: CallOverrides): Promise<void>;

    recoverLostToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    redeem(overrides?: CallOverrides): Promise<BigNumber>;

    renounceManagement(overrides?: CallOverrides): Promise<void>;

    setBondTerm(
      controlVariable_: BigNumberish,
      vestingTerm_: BigNumberish,
      minPrice_: BigNumberish,
      maxPayout_: BigNumberish,
      DAOShare_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<string>;

    vestingTerm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'OwnershipPulled(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipPulledEventFilter;
    OwnershipPulled(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipPulledEventFilter;

    'OwnershipPushed(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipPushedEventFilter;
    OwnershipPushed(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipPushedEventFilter;
  };

  estimateGas: {
    DAO(overrides?: CallOverrides): Promise<BigNumber>;

    DAOShare(overrides?: CallOverrides): Promise<BigNumber>;

    LP(overrides?: CallOverrides): Promise<BigNumber>;

    OHM(overrides?: CallOverrides): Promise<BigNumber>;

    bondCalculator(overrides?: CallOverrides): Promise<BigNumber>;

    bondInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    bondPrice(overrides?: CallOverrides): Promise<BigNumber>;

    bondPriceInDAI(overrides?: CallOverrides): Promise<BigNumber>;

    bondPriceWithoutFloor(overrides?: CallOverrides): Promise<BigNumber>;

    circulatingOHMContract(overrides?: CallOverrides): Promise<BigNumber>;

    controlVariable(overrides?: CallOverrides): Promise<BigNumber>;

    debtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    maxPayout(overrides?: CallOverrides): Promise<BigNumber>;

    maxPayoutPercent(overrides?: CallOverrides): Promise<BigNumber>;

    minimumPrice(overrides?: CallOverrides): Promise<BigNumber>;

    payoutFor(
      value_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingPayoutFor(
      depositor_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    percentVestedFor(
      depositor_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recoverLostToken(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeem(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBondTerm(
      controlVariable_: BigNumberish,
      vestingTerm_: BigNumberish,
      minPrice_: BigNumberish,
      maxPayout_: BigNumberish,
      DAOShare_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    vestingTerm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DAOShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondCalculator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bondPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondPriceInDAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondPriceWithoutFloor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    circulatingOHMContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    controlVariable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debtRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxPayout(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxPayoutPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payoutFor(
      value_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingPayoutFor(
      depositor_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    percentVestedFor(
      depositor_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recoverLostToken(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBondTerm(
      controlVariable_: BigNumberish,
      vestingTerm_: BigNumberish,
      minPrice_: BigNumberish,
      maxPayout_: BigNumberish,
      DAOShare_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestingTerm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
