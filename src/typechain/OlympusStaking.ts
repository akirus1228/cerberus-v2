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

export interface OlympusStakingInterface extends ethers.utils.Interface {
  functions: {
    'OHM()': FunctionFragment;
    'claim(address)': FunctionFragment;
    'contractBalance()': FunctionFragment;
    'distributor()': FunctionFragment;
    'epoch()': FunctionFragment;
    'forfeit()': FunctionFragment;
    'giveLockBonus(uint256)': FunctionFragment;
    'index()': FunctionFragment;
    'locker()': FunctionFragment;
    'manager()': FunctionFragment;
    'pullManagement()': FunctionFragment;
    'pushManagement(address)': FunctionFragment;
    'rebase()': FunctionFragment;
    'renounceManagement()': FunctionFragment;
    'returnLockBonus(uint256)': FunctionFragment;
    'sOHM()': FunctionFragment;
    'setContract(uint8,address)': FunctionFragment;
    'setWarmup(uint256)': FunctionFragment;
    'stake(uint256,address)': FunctionFragment;
    'toggleDepositLock()': FunctionFragment;
    'totalBonus()': FunctionFragment;
    'unstake(uint256,bool)': FunctionFragment;
    'warmupContract()': FunctionFragment;
    'warmupInfo(address)': FunctionFragment;
    'warmupPeriod()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'OHM', values?: undefined): string;

  encodeFunctionData(functionFragment: 'claim', values: [string]): string;

  encodeFunctionData(
    functionFragment: 'contractBalance',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'distributor',
    values?: undefined
  ): string;

  encodeFunctionData(functionFragment: 'epoch', values?: undefined): string;

  encodeFunctionData(functionFragment: 'forfeit', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'giveLockBonus',
    values: [BigNumberish]
  ): string;

  encodeFunctionData(functionFragment: 'index', values?: undefined): string;

  encodeFunctionData(functionFragment: 'locker', values?: undefined): string;

  encodeFunctionData(functionFragment: 'manager', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'pullManagement',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'pushManagement',
    values: [string]
  ): string;

  encodeFunctionData(functionFragment: 'rebase', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'renounceManagement',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'returnLockBonus',
    values: [BigNumberish]
  ): string;

  encodeFunctionData(functionFragment: 'sOHM', values?: undefined): string;

  encodeFunctionData(
    functionFragment: 'setContract',
    values: [BigNumberish, string]
  ): string;

  encodeFunctionData(
    functionFragment: 'setWarmup',
    values: [BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'stake',
    values: [BigNumberish, string]
  ): string;

  encodeFunctionData(
    functionFragment: 'toggleDepositLock',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'totalBonus',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'unstake',
    values: [BigNumberish, boolean]
  ): string;

  encodeFunctionData(
    functionFragment: 'warmupContract',
    values?: undefined
  ): string;

  encodeFunctionData(functionFragment: 'warmupInfo', values: [string]): string;

  encodeFunctionData(
    functionFragment: 'warmupPeriod',
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: 'OHM', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'contractBalance',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'distributor',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'epoch', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'forfeit', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'giveLockBonus',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'index', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'locker', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'manager', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'pullManagement',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'pushManagement',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'rebase', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'renounceManagement',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'returnLockBonus',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'sOHM', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'setContract',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'setWarmup', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'toggleDepositLock',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'totalBonus', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'unstake', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'warmupContract',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'warmupInfo', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'warmupPeriod',
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

export interface OlympusStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;

  attach(addressOrName: string): this;

  deployed(): Promise<this>;

  interface: OlympusStakingInterface;

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

    claim(
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    distributor(overrides?: CallOverrides): Promise<[string]>;

    epoch(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber] & {
      length: BigNumber;
      number: BigNumber;
      endBlock: BigNumber;
      distribute: BigNumber;
    }>;

    forfeit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    giveLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    index(overrides?: CallOverrides): Promise<[BigNumber]>;

    locker(overrides?: CallOverrides): Promise<[string]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rebase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sOHM(overrides?: CallOverrides): Promise<[string]>;

    setContract(
      _contract: BigNumberish,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWarmup(
      _warmupPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleDepositLock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalBonus(overrides?: CallOverrides): Promise<[BigNumber]>;

    unstake(
      _amount: BigNumberish,
      _trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    warmupContract(overrides?: CallOverrides): Promise<[string]>;

    warmupInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, boolean] & {
      deposit: BigNumber;
      gons: BigNumber;
      expiry: BigNumber;
      lock: boolean;
    }>;

    warmupPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  OHM(overrides?: CallOverrides): Promise<string>;

  claim(
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractBalance(overrides?: CallOverrides): Promise<BigNumber>;

  distributor(overrides?: CallOverrides): Promise<string>;

  epoch(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber] & {
    length: BigNumber;
    number: BigNumber;
    endBlock: BigNumber;
    distribute: BigNumber;
  }>;

  forfeit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  giveLockBonus(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  index(overrides?: CallOverrides): Promise<BigNumber>;

  locker(overrides?: CallOverrides): Promise<string>;

  manager(overrides?: CallOverrides): Promise<string>;

  pullManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushManagement(
    newOwner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rebase(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnLockBonus(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sOHM(overrides?: CallOverrides): Promise<string>;

  setContract(
    _contract: BigNumberish,
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWarmup(
    _warmupPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleDepositLock(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalBonus(overrides?: CallOverrides): Promise<BigNumber>;

  unstake(
    _amount: BigNumberish,
    _trigger: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  warmupContract(overrides?: CallOverrides): Promise<string>;

  warmupInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, boolean] & {
    deposit: BigNumber;
    gons: BigNumber;
    expiry: BigNumber;
    lock: boolean;
  }>;

  warmupPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    OHM(overrides?: CallOverrides): Promise<string>;

    claim(_recipient: string, overrides?: CallOverrides): Promise<void>;

    contractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<string>;

    epoch(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber] & {
      length: BigNumber;
      number: BigNumber;
      endBlock: BigNumber;
      distribute: BigNumber;
    }>;

    forfeit(overrides?: CallOverrides): Promise<void>;

    giveLockBonus(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    locker(overrides?: CallOverrides): Promise<string>;

    manager(overrides?: CallOverrides): Promise<string>;

    pullManagement(overrides?: CallOverrides): Promise<void>;

    pushManagement(newOwner_: string, overrides?: CallOverrides): Promise<void>;

    rebase(overrides?: CallOverrides): Promise<void>;

    renounceManagement(overrides?: CallOverrides): Promise<void>;

    returnLockBonus(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sOHM(overrides?: CallOverrides): Promise<string>;

    setContract(
      _contract: BigNumberish,
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setWarmup(
      _warmupPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    toggleDepositLock(overrides?: CallOverrides): Promise<void>;

    totalBonus(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(
      _amount: BigNumberish,
      _trigger: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    warmupContract(overrides?: CallOverrides): Promise<string>;

    warmupInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, boolean] & {
      deposit: BigNumber;
      gons: BigNumber;
      expiry: BigNumber;
      lock: boolean;
    }>;

    warmupPeriod(overrides?: CallOverrides): Promise<BigNumber>;
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
    OHM(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    forfeit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    giveLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    locker(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rebase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sOHM(overrides?: CallOverrides): Promise<BigNumber>;

    setContract(
      _contract: BigNumberish,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWarmup(
      _warmupPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleDepositLock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalBonus(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(
      _amount: BigNumberish,
      _trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    warmupContract(overrides?: CallOverrides): Promise<BigNumber>;

    warmupInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    warmupPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    OHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    forfeit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    giveLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    locker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rebase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sOHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setContract(
      _contract: BigNumberish,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWarmup(
      _warmupPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleDepositLock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalBonus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstake(
      _amount: BigNumberish,
      _trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    warmupContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    warmupInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    warmupPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
