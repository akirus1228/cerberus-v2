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
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../core/interfaces/typechain';

export interface RedeemHelperInterface extends ethers.utils.Interface {
  functions: {
    'addBondContract(address)': FunctionFragment;
    'bonds(uint256)': FunctionFragment;
    'policy()': FunctionFragment;
    'pullManagement()': FunctionFragment;
    'pushManagement(address)': FunctionFragment;
    'redeemAll(address,bool)': FunctionFragment;
    'removeBondContract(uint256)': FunctionFragment;
    'renounceManagement()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'addBondContract',
    values: [string]
  ): string;

  encodeFunctionData(functionFragment: 'bonds', values: [BigNumberish]): string;

  encodeFunctionData(functionFragment: 'policy', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'pullManagement',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'pushManagement',
    values: [string]
  ): string;

  encodeFunctionData(
    functionFragment: 'redeemAll',
    values: [string, boolean]
  ): string;

  encodeFunctionData(
    functionFragment: 'removeBondContract',
    values: [BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'renounceManagement',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'addBondContract',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'bonds', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'policy', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'pullManagement',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'pushManagement',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'redeemAll', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'removeBondContract',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'renounceManagement',
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

export interface RedeemHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;

  attach(addressOrName: string): this;

  deployed(): Promise<this>;

  interface: RedeemHelperInterface;

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
    addBondContract(
      _bond: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bonds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    policy(overrides?: CallOverrides): Promise<[string]>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemAll(
      _recipient: string,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeBondContract(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBondContract(
    _bond: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bonds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  policy(overrides?: CallOverrides): Promise<string>;

  pullManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushManagement(
    newOwner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemAll(
    _recipient: string,
    _stake: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeBondContract(
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBondContract(_bond: string, overrides?: CallOverrides): Promise<void>;

    bonds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    policy(overrides?: CallOverrides): Promise<string>;

    pullManagement(overrides?: CallOverrides): Promise<void>;

    pushManagement(newOwner_: string, overrides?: CallOverrides): Promise<void>;

    redeemAll(
      _recipient: string,
      _stake: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    removeBondContract(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceManagement(overrides?: CallOverrides): Promise<void>;
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
    addBondContract(
      _bond: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bonds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    policy(overrides?: CallOverrides): Promise<BigNumber>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemAll(
      _recipient: string,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeBondContract(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBondContract(
      _bond: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bonds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    policy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemAll(
      _recipient: string,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeBondContract(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
