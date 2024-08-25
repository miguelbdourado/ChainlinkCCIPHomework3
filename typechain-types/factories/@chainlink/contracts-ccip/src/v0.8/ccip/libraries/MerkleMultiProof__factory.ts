/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../../common";
import type {
  MerkleMultiProof,
  MerkleMultiProofInterface,
} from "../../../../../../../@chainlink/contracts-ccip/src/v0.8/ccip/libraries/MerkleMultiProof";

const _abi = [
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    inputs: [],
    name: "LeavesCannotBeEmpty",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220882a724227414a96754084c233b1be2b79edc22a558866682dd3e7f731dcabef64736f6c63430008140033";

type MerkleMultiProofConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleMultiProofConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleMultiProof__factory extends ContractFactory {
  constructor(...args: MerkleMultiProofConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MerkleMultiProof & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MerkleMultiProof__factory {
    return super.connect(runner) as MerkleMultiProof__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleMultiProofInterface {
    return new Interface(_abi) as MerkleMultiProofInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MerkleMultiProof {
    return new Contract(address, _abi, runner) as unknown as MerkleMultiProof;
  }
}
