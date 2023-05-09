import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { TaroClient as _tarorpc_TaroClient, TaroDefinition as _tarorpc_TaroDefinition } from './tarorpc/Taro';
import type { UniverseClient as _universerpc_UniverseClient, UniverseDefinition as _universerpc_UniverseDefinition } from './universerpc/Universe';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
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
  universerpc: {
    AddFederationServerRequest: MessageTypeDefinition
    AddFederationServerResponse: MessageTypeDefinition
    AssetKey: MessageTypeDefinition
    AssetLeaf: MessageTypeDefinition
    AssetLeafKeyResponse: MessageTypeDefinition
    AssetLeafResponse: MessageTypeDefinition
    AssetRootQuery: MessageTypeDefinition
    AssetRootRequest: MessageTypeDefinition
    AssetRootResponse: MessageTypeDefinition
    DeleteFederationServerRequest: MessageTypeDefinition
    DeleteFederationServerResponse: MessageTypeDefinition
    ID: MessageTypeDefinition
    IssuanceProof: MessageTypeDefinition
    IssuanceProofResponse: MessageTypeDefinition
    ListFederationServersRequest: MessageTypeDefinition
    ListFederationServersResponse: MessageTypeDefinition
    MerkleSumNode: MessageTypeDefinition
    Outpoint: MessageTypeDefinition
    QueryRootResponse: MessageTypeDefinition
    SyncRequest: MessageTypeDefinition
    SyncResponse: MessageTypeDefinition
    SyncTarget: MessageTypeDefinition
    SyncedUniverse: MessageTypeDefinition
    Universe: SubtypeConstructor<typeof grpc.Client, _universerpc_UniverseClient> & { service: _universerpc_UniverseDefinition }
    UniverseFederationServer: MessageTypeDefinition
    UniverseKey: MessageTypeDefinition
    UniverseRoot: MessageTypeDefinition
    UniverseSyncMode: EnumTypeDefinition
  }
}

