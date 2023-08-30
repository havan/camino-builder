/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KYCTest, KYCTestInterface } from "../KYCTest";

const _abi = [
  {
    inputs: [],
    name: "getIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasEntered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103d3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806324d70dea1461003b57806390a6f5a91461006b575b600080fd5b61005560048036038101906100509190610230565b610075565b6040516100629190610278565b60405180910390f35b610073610095565b005b60006020528060005260406000206000915054906101000a900460ff1681565b600173010000000000000000000000000000000000000a73ffffffffffffffffffffffffffffffffffffffff1663bb03fa1d336040518263ffffffff1660e01b81526004016100e491906102a2565b60206040518083038186803b1580156100fc57600080fd5b505afa158015610110573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013491906102f3565b14610174576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016b9061037d565b60405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101fd826101d2565b9050919050565b61020d816101f2565b811461021857600080fd5b50565b60008135905061022a81610204565b92915050565b600060208284031215610246576102456101cd565b5b60006102548482850161021b565b91505092915050565b60008115159050919050565b6102728161025d565b82525050565b600060208201905061028d6000830184610269565b92915050565b61029c816101f2565b82525050565b60006020820190506102b76000830184610293565b92915050565b6000819050919050565b6102d0816102bd565b81146102db57600080fd5b50565b6000815190506102ed816102c7565b92915050565b600060208284031215610309576103086101cd565b5b6000610317848285016102de565b91505092915050565b600082825260208201905092915050565b7f4b5943206e6f7420617070726f76656400000000000000000000000000000000600082015250565b6000610367601083610320565b915061037282610331565b602082019050919050565b600060208201905081810360008301526103968161035a565b905091905056fea2646970667358221220b2141f22e3bef515dc93dedf89c977d6ab4a6a643a7f2385e64b2d684e26524264736f6c63430008090033";

export class KYCTest__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KYCTest> {
    return super.deploy(overrides || {}) as Promise<KYCTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KYCTest {
    return super.attach(address) as KYCTest;
  }
  connect(signer: Signer): KYCTest__factory {
    return super.connect(signer) as KYCTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KYCTestInterface {
    return new utils.Interface(_abi) as KYCTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KYCTest {
    return new Contract(address, _abi, signerOrProvider) as KYCTest;
  }
}
