import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { MintClient as _mintrpc_MintClient, MintDefinition as _mintrpc_MintDefinition } from './mintrpc/Mint';
import type { TaroClient as _tarorpc_TaroClient, TaroDefinition as _tarorpc_TaroDefinition } from './tarorpc/Taro';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  mintrpc: {
    BatchState: EnumTypeDefinition
    CancelBatchRequest: MessageTypeDefinition
    CancelBatchResponse: MessageTypeDefinition
    FinalizeBatchRequest: MessageTypeDefinition
    FinalizeBatchResponse: MessageTypeDefinition
    ListBatchRequest: MessageTypeDefinition
    ListBatchResponse: MessageTypeDefinition
    Mint: SubtypeConstructor<typeof grpc.Client, _mintrpc_MintClient> & { service: _mintrpc_MintDefinition }
    MintAsset: MessageTypeDefinition
    MintAssetRequest: MessageTypeDefinition
    MintAssetResponse: MessageTypeDefinition
    MintingBatch: MessageTypeDefinition
  }
  tarorpc: {
    Addr: MessageTypeDefinition
    AddrEvent: MessageTypeDefinition
    AddrEventStatus: EnumTypeDefinition
    AddrReceivesRequest: MessageTypeDefinition
    AddrReceivesResponse: MessageTypeDefinition
    AnchorInfo: MessageTypeDefinition
    Asset: MessageTypeDefinition
    AssetBalance: MessageTypeDefinition
    AssetGroup: MessageTypeDefinition
    AssetGroupBalance: MessageTypeDefinition
    AssetHumanReadable: MessageTypeDefinition
    AssetMeta: MessageTypeDefinition
    AssetMetaType: EnumTypeDefinition
    AssetTransfer: MessageTypeDefinition
    AssetType: EnumTypeDefinition
    DebugLevelRequest: MessageTypeDefinition
    DebugLevelResponse: MessageTypeDefinition
    DecodeAddrRequest: MessageTypeDefinition
    ExecuteSendStateEvent: MessageTypeDefinition
    ExportProofRequest: MessageTypeDefinition
    FetchAssetMetaRequest: MessageTypeDefinition
    GenesisInfo: MessageTypeDefinition
    GroupedAssets: MessageTypeDefinition
    ImportProofRequest: MessageTypeDefinition
    ImportProofResponse: MessageTypeDefinition
    KeyDescriptor: MessageTypeDefinition
    KeyLocator: MessageTypeDefinition
    ListAssetRequest: MessageTypeDefinition
    ListAssetResponse: MessageTypeDefinition
    ListBalancesRequest: MessageTypeDefinition
    ListBalancesResponse: MessageTypeDefinition
    ListGroupsRequest: MessageTypeDefinition
    ListGroupsResponse: MessageTypeDefinition
    ListTransfersRequest: MessageTypeDefinition
    ListTransfersResponse: MessageTypeDefinition
    ListUtxosRequest: MessageTypeDefinition
    ListUtxosResponse: MessageTypeDefinition
    ManagedUtxo: MessageTypeDefinition
    NewAddrRequest: MessageTypeDefinition
    PrevInputAsset: MessageTypeDefinition
    PrevWitness: MessageTypeDefinition
    ProofFile: MessageTypeDefinition
    ProofVerifyResponse: MessageTypeDefinition
    QueryAddrRequest: MessageTypeDefinition
    QueryAddrResponse: MessageTypeDefinition
    ReceiverProofBackoffWaitEvent: MessageTypeDefinition
    ScriptKey: MessageTypeDefinition
    SendAssetEvent: MessageTypeDefinition
    SendAssetRequest: MessageTypeDefinition
    SendAssetResponse: MessageTypeDefinition
    SplitCommitment: MessageTypeDefinition
    StopRequest: MessageTypeDefinition
    StopResponse: MessageTypeDefinition
    SubscribeSendAssetEventNtfnsRequest: MessageTypeDefinition
    Taro: SubtypeConstructor<typeof grpc.Client, _tarorpc_TaroClient> & { service: _tarorpc_TaroDefinition }
    TransferInput: MessageTypeDefinition
    TransferOutput: MessageTypeDefinition
    TransferOutputAnchor: MessageTypeDefinition
  }
}

