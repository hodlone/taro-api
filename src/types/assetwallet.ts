import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AssetWalletClient as _assetwalletrpc_AssetWalletClient, AssetWalletDefinition as _assetwalletrpc_AssetWalletDefinition } from './assetwalletrpc/AssetWallet';
import type { TaprootAssetsClient as _taprpc_TaprootAssetsClient, TaprootAssetsDefinition as _taprpc_TaprootAssetsDefinition } from './taprpc/TaprootAssets';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  assetwalletrpc: {
    AnchorVirtualPsbtsRequest: MessageTypeDefinition
    AssetWallet: SubtypeConstructor<typeof grpc.Client, _assetwalletrpc_AssetWalletClient> & { service: _assetwalletrpc_AssetWalletDefinition }
    FundVirtualPsbtRequest: MessageTypeDefinition
    FundVirtualPsbtResponse: MessageTypeDefinition
    NextInternalKeyRequest: MessageTypeDefinition
    NextInternalKeyResponse: MessageTypeDefinition
    NextScriptKeyRequest: MessageTypeDefinition
    NextScriptKeyResponse: MessageTypeDefinition
    OutPoint: MessageTypeDefinition
    PrevId: MessageTypeDefinition
    ProveAssetOwnershipRequest: MessageTypeDefinition
    ProveAssetOwnershipResponse: MessageTypeDefinition
    SignVirtualPsbtRequest: MessageTypeDefinition
    SignVirtualPsbtResponse: MessageTypeDefinition
    TxTemplate: MessageTypeDefinition
    VerifyAssetOwnershipRequest: MessageTypeDefinition
    VerifyAssetOwnershipResponse: MessageTypeDefinition
  }
  taprpc: {
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
    OutputType: EnumTypeDefinition
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
    TaprootAssets: SubtypeConstructor<typeof grpc.Client, _taprpc_TaprootAssetsClient> & { service: _taprpc_TaprootAssetsDefinition }
    TransferInput: MessageTypeDefinition
    TransferOutput: MessageTypeDefinition
    TransferOutputAnchor: MessageTypeDefinition
  }
}

