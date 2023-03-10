import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, Result } from '@ethersproject/abi';
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

export interface StakingHelperInterface extends ethers.utils.Interface {
  functions: {
    'OHM()': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'staking()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'OHM', values?: undefined): string;

  encodeFunctionData(functionFragment: 'stake', values: [BigNumberish]): string;

  encodeFunctionData(functionFragment: 'staking', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'OHM', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'staking', data: BytesLike): Result;

  events: {};
}

export interface StakingHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;

  attach(addressOrName: string): this;

  deployed(): Promise<this>;

  interface: StakingHelperInterface;

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
    OHM(overrides?: CallOverrides): Promise<[string]>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    staking(overrides?: CallOverrides): Promise<[string]>;
  };

  OHM(overrides?: CallOverrides): Promise<string>;

  stake(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  staking(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    OHM(overrides?: CallOverrides): Promise<string>;

    stake(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    staking(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    OHM(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    staking(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    OHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    staking(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
