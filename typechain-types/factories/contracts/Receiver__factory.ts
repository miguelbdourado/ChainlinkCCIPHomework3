/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Receiver, ReceiverInterface } from "../../contracts/Receiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "InvalidRouter",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "SenderNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "sourceChainSelector",
        type: "uint64",
      },
    ],
    name: "SourceChainNotAllowed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "sourceChainSelector",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "iterationsInput",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "iterationsDone",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    name: "MessageReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "allowlistSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_sourceChainSelector",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "allowlistSourceChain",
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
    name: "allowlistedSenders",
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
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "allowlistedSourceChains",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "messageId",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sourceChainSelector",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "sender",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "destTokenAmounts",
            type: "tuple[]",
          },
        ],
        internalType: "struct Client.Any2EVMMessage",
        name: "message",
        type: "tuple",
      },
    ],
    name: "ccipReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610c77380380610c7783398101604081905261002f916101a1565b33806000836001600160a01b038116610063576040516335fdcccd60e21b8152600060048201526024015b60405180910390fd5b6001600160a01b0390811660805282166100bf5760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000604482015260640161005a565b600080546001600160a01b0319166001600160a01b03848116919091179091558116156100ef576100ef816100f8565b505050506101d1565b336001600160a01b038216036101505760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640161005a565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6000602082840312156101b357600080fd5b81516001600160a01b03811681146101ca57600080fd5b9392505050565b608051610a846101f36000396000818161017501526103390152610a846000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80638da5cb5b11610076578063db04fa491161005b578063db04fa4914610199578063eab5b02c146101ac578063f2fde38b146101bf57600080fd5b80638da5cb5b1461014e578063b0f479a11461017357600080fd5b80636159ada1116100a75780636159ada11461010e57806379ba50971461013157806385572ffb1461013b57600080fd5b806301ffc9a7146100c35780634030d521146100eb575b600080fd5b6100d66100d1366004610608565b6101d2565b60405190151581526020015b60405180910390f35b6100d66100f936600461066e565b60026020526000908152604090205460ff1681565b6100d661011c36600461069e565b60036020526000908152604090205460ff1681565b61013961026b565b005b6101396101493660046106bb565b61032e565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100e2565b7f000000000000000000000000000000000000000000000000000000000000000061015b565b6101396101a7366004610706565b6103a6565b6101396101ba366004610739565b6103da565b6101396101cd36600461069e565b61040d565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f85572ffb00000000000000000000000000000000000000000000000000000000148061026557507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b6001546001600160a01b031633146102ca5760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064015b60405180910390fd5b600080543373ffffffffffffffffffffffffffffffffffffffff19808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610392576040517fd7f733340000000000000000000000000000000000000000000000000000000081523360048201526024016102c1565b6103a361039e82610907565b61041e565b50565b6103ae6104f6565b67ffffffffffffffff919091166000908152600260205260409020805460ff1916911515919091179055565b6103e26104f6565b6001600160a01b03919091166000908152600360205260409020805460ff1916911515919091179055565b6104156104f6565b6103a381610552565b6000816060015180602001905181019061043891906109b4565b90508060006104486064836109cd565b905060005b818110156104735761045f8184610a05565b92508061046b81610a18565b91505061044d565b50836020015167ffffffffffffffff1684600001517f2fdca6724503823c2fdee314a2357f6789760842e990f94aa8dc21d16ac41ff786604001518060200190518101906104c19190610a31565b604080516001600160a01b0390921682526020820188905281018590526060810186905260800160405180910390a350505050565b6000546001600160a01b031633146105505760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e65720000000000000000000060448201526064016102c1565b565b336001600160a01b038216036105aa5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016102c1565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60006020828403121561061a57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461064a57600080fd5b9392505050565b803567ffffffffffffffff8116811461066957600080fd5b919050565b60006020828403121561068057600080fd5b61064a82610651565b6001600160a01b03811681146103a357600080fd5b6000602082840312156106b057600080fd5b813561064a81610689565b6000602082840312156106cd57600080fd5b813567ffffffffffffffff8111156106e457600080fd5b820160a0818503121561064a57600080fd5b8035801515811461066957600080fd5b6000806040838503121561071957600080fd5b61072283610651565b9150610730602084016106f6565b90509250929050565b6000806040838503121561074c57600080fd5b823561072281610689565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561079057610790610757565b60405290565b60405160a0810167ffffffffffffffff8111828210171561079057610790610757565b604051601f8201601f1916810167ffffffffffffffff811182821017156107e2576107e2610757565b604052919050565b600082601f8301126107fb57600080fd5b813567ffffffffffffffff81111561081557610815610757565b610828601f8201601f19166020016107b9565b81815284602083860101111561083d57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261086b57600080fd5b8135602067ffffffffffffffff82111561088757610887610757565b610895818360051b016107b9565b82815260069290921b840181019181810190868411156108b457600080fd5b8286015b848110156108fc57604081890312156108d15760008081fd5b6108d961076d565b81356108e481610689565b815281850135858201528352918301916040016108b8565b509695505050505050565b600060a0823603121561091957600080fd5b610921610796565b8235815261093160208401610651565b6020820152604083013567ffffffffffffffff8082111561095157600080fd5b61095d368387016107ea565b6040840152606085013591508082111561097657600080fd5b610982368387016107ea565b6060840152608085013591508082111561099b57600080fd5b506109a83682860161085a565b60808301525092915050565b6000602082840312156109c657600080fd5b5051919050565b6000826109ea57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b80820180821115610265576102656109ef565b600060018201610a2a57610a2a6109ef565b5060010190565b600060208284031215610a4357600080fd5b815161064a8161068956fea26469706673582212209aa2cf437b1217e651fd6ff519d0b62bebd8e1d47685f1fe33d0a955410f0d5664736f6c63430008140033";

type ReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Receiver__factory extends ContractFactory {
  constructor(...args: ReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    router: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(router, overrides || {});
  }
  override deploy(
    router: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(router, overrides || {}) as Promise<
      Receiver & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Receiver__factory {
    return super.connect(runner) as Receiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiverInterface {
    return new Interface(_abi) as ReceiverInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Receiver {
    return new Contract(address, _abi, runner) as unknown as Receiver;
  }
}
