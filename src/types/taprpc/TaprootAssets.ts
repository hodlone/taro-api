// Original file: protos/taprootassets.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddrPartial as _taprpc_AddrPartial, Addr as _taprpc_Addr } from '../taprpc/Addr';
import type { AddrReceivesRequestPartial as _taprpc_AddrReceivesRequestPartial, AddrReceivesRequest as _taprpc_AddrReceivesRequest } from '../taprpc/AddrReceivesRequest';
import type { AddrReceivesResponsePartial as _taprpc_AddrReceivesResponsePartial, AddrReceivesResponse as _taprpc_AddrReceivesResponse } from '../taprpc/AddrReceivesResponse';
import type { AssetMetaPartial as _taprpc_AssetMetaPartial, AssetMeta as _taprpc_AssetMeta } from '../taprpc/AssetMeta';
import type { DebugLevelRequestPartial as _taprpc_DebugLevelRequestPartial, DebugLevelRequest as _taprpc_DebugLevelRequest } from '../taprpc/DebugLevelRequest';
import type { DebugLevelResponsePartial as _taprpc_DebugLevelResponsePartial, DebugLevelResponse as _taprpc_DebugLevelResponse } from '../taprpc/DebugLevelResponse';
import type { DecodeAddrRequestPartial as _taprpc_DecodeAddrRequestPartial, DecodeAddrRequest as _taprpc_DecodeAddrRequest } from '../taprpc/DecodeAddrRequest';
import type { ExportProofRequestPartial as _taprpc_ExportProofRequestPartial, ExportProofRequest as _taprpc_ExportProofRequest } from '../taprpc/ExportProofRequest';
import type { FetchAssetMetaRequestPartial as _taprpc_FetchAssetMetaRequestPartial, FetchAssetMetaRequest as _taprpc_FetchAssetMetaRequest } from '../taprpc/FetchAssetMetaRequest';
import type { ImportProofRequestPartial as _taprpc_ImportProofRequestPartial, ImportProofRequest as _taprpc_ImportProofRequest } from '../taprpc/ImportProofRequest';
import type { ImportProofResponsePartial as _taprpc_ImportProofResponsePartial, ImportProofResponse as _taprpc_ImportProofResponse } from '../taprpc/ImportProofResponse';
import type { ListAssetRequestPartial as _taprpc_ListAssetRequestPartial, ListAssetRequest as _taprpc_ListAssetRequest } from '../taprpc/ListAssetRequest';
import type { ListAssetResponsePartial as _taprpc_ListAssetResponsePartial, ListAssetResponse as _taprpc_ListAssetResponse } from '../taprpc/ListAssetResponse';
import type { ListBalancesRequestPartial as _taprpc_ListBalancesRequestPartial, ListBalancesRequest as _taprpc_ListBalancesRequest } from '../taprpc/ListBalancesRequest';
import type { ListBalancesResponsePartial as _taprpc_ListBalancesResponsePartial, ListBalancesResponse as _taprpc_ListBalancesResponse } from '../taprpc/ListBalancesResponse';
import type { ListGroupsRequestPartial as _taprpc_ListGroupsRequestPartial, ListGroupsRequest as _taprpc_ListGroupsRequest } from '../taprpc/ListGroupsRequest';
import type { ListGroupsResponsePartial as _taprpc_ListGroupsResponsePartial, ListGroupsResponse as _taprpc_ListGroupsResponse } from '../taprpc/ListGroupsResponse';
import type { ListTransfersRequestPartial as _taprpc_ListTransfersRequestPartial, ListTransfersRequest as _taprpc_ListTransfersRequest } from '../taprpc/ListTransfersRequest';
import type { ListTransfersResponsePartial as _taprpc_ListTransfersResponsePartial, ListTransfersResponse as _taprpc_ListTransfersResponse } from '../taprpc/ListTransfersResponse';
import type { ListUtxosRequestPartial as _taprpc_ListUtxosRequestPartial, ListUtxosRequest as _taprpc_ListUtxosRequest } from '../taprpc/ListUtxosRequest';
import type { ListUtxosResponsePartial as _taprpc_ListUtxosResponsePartial, ListUtxosResponse as _taprpc_ListUtxosResponse } from '../taprpc/ListUtxosResponse';
import type { NewAddrRequestPartial as _taprpc_NewAddrRequestPartial, NewAddrRequest as _taprpc_NewAddrRequest } from '../taprpc/NewAddrRequest';
import type { ProofFilePartial as _taprpc_ProofFilePartial, ProofFile as _taprpc_ProofFile } from '../taprpc/ProofFile';
import type { ProofVerifyResponsePartial as _taprpc_ProofVerifyResponsePartial, ProofVerifyResponse as _taprpc_ProofVerifyResponse } from '../taprpc/ProofVerifyResponse';
import type { QueryAddrRequestPartial as _taprpc_QueryAddrRequestPartial, QueryAddrRequest as _taprpc_QueryAddrRequest } from '../taprpc/QueryAddrRequest';
import type { QueryAddrResponsePartial as _taprpc_QueryAddrResponsePartial, QueryAddrResponse as _taprpc_QueryAddrResponse } from '../taprpc/QueryAddrResponse';
import type { SendAssetEventPartial as _taprpc_SendAssetEventPartial, SendAssetEvent as _taprpc_SendAssetEvent } from '../taprpc/SendAssetEvent';
import type { SendAssetRequestPartial as _taprpc_SendAssetRequestPartial, SendAssetRequest as _taprpc_SendAssetRequest } from '../taprpc/SendAssetRequest';
import type { SendAssetResponsePartial as _taprpc_SendAssetResponsePartial, SendAssetResponse as _taprpc_SendAssetResponse } from '../taprpc/SendAssetResponse';
import type { StopRequestPartial as _taprpc_StopRequestPartial, StopRequest as _taprpc_StopRequest } from '../taprpc/StopRequest';
import type { StopResponsePartial as _taprpc_StopResponsePartial, StopResponse as _taprpc_StopResponse } from '../taprpc/StopResponse';
import type { SubscribeSendAssetEventNtfnsRequestPartial as _taprpc_SubscribeSendAssetEventNtfnsRequestPartial, SubscribeSendAssetEventNtfnsRequest as _taprpc_SubscribeSendAssetEventNtfnsRequest } from '../taprpc/SubscribeSendAssetEventNtfnsRequest';

export interface TaprootAssetsClient extends grpc.Client {
  AddrReceives(argument: _taprpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  AddrReceives(argument: _taprpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  AddrReceives(argument: _taprpc_AddrReceivesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  AddrReceives(argument: _taprpc_AddrReceivesRequestPartial, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _taprpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _taprpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _taprpc_AddrReceivesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _taprpc_AddrReceivesRequestPartial, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  
  DebugLevel(argument: _taprpc_DebugLevelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _taprpc_DebugLevelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _taprpc_DebugLevelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _taprpc_DebugLevelRequestPartial, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _taprpc_DebugLevelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _taprpc_DebugLevelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _taprpc_DebugLevelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _taprpc_DebugLevelRequestPartial, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  
  DecodeAddr(argument: _taprpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _taprpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _taprpc_DecodeAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _taprpc_DecodeAddrRequestPartial, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _taprpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _taprpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _taprpc_DecodeAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _taprpc_DecodeAddrRequestPartial, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  
  ExportProof(argument: _taprpc_ExportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  ExportProof(argument: _taprpc_ExportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  ExportProof(argument: _taprpc_ExportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  ExportProof(argument: _taprpc_ExportProofRequestPartial, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _taprpc_ExportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _taprpc_ExportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _taprpc_ExportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _taprpc_ExportProofRequestPartial, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  
  FetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  FetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  FetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  FetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  
  ImportProof(argument: _taprpc_ImportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ImportProofResponse>): grpc.ClientUnaryCall;
  ImportProof(argument: _taprpc_ImportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ImportProofResponse>): grpc.ClientUnaryCall;
  ImportProof(argument: _taprpc_ImportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ImportProofResponse>): grpc.ClientUnaryCall;
  ImportProof(argument: _taprpc_ImportProofRequestPartial, callback: grpc.requestCallback<_taprpc_ImportProofResponse>): grpc.ClientUnaryCall;
  importProof(argument: _taprpc_ImportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ImportProofResponse>): grpc.ClientUnaryCall;
  importProof(argument: _taprpc_ImportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ImportProofResponse>): grpc.ClientUnaryCall;
  importProof(argument: _taprpc_ImportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ImportProofResponse>): grpc.ClientUnaryCall;
  importProof(argument: _taprpc_ImportProofRequestPartial, callback: grpc.requestCallback<_taprpc_ImportProofResponse>): grpc.ClientUnaryCall;
  
  ListAssets(argument: _taprpc_ListAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  ListAssets(argument: _taprpc_ListAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  ListAssets(argument: _taprpc_ListAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  ListAssets(argument: _taprpc_ListAssetRequestPartial, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _taprpc_ListAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _taprpc_ListAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _taprpc_ListAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _taprpc_ListAssetRequestPartial, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  
  ListBalances(argument: _taprpc_ListBalancesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  ListBalances(argument: _taprpc_ListBalancesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  ListBalances(argument: _taprpc_ListBalancesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  ListBalances(argument: _taprpc_ListBalancesRequestPartial, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _taprpc_ListBalancesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _taprpc_ListBalancesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _taprpc_ListBalancesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _taprpc_ListBalancesRequestPartial, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  
  ListGroups(argument: _taprpc_ListGroupsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  ListGroups(argument: _taprpc_ListGroupsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  ListGroups(argument: _taprpc_ListGroupsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  ListGroups(argument: _taprpc_ListGroupsRequestPartial, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _taprpc_ListGroupsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _taprpc_ListGroupsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _taprpc_ListGroupsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _taprpc_ListGroupsRequestPartial, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  
  ListTransfers(argument: _taprpc_ListTransfersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  ListTransfers(argument: _taprpc_ListTransfersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  ListTransfers(argument: _taprpc_ListTransfersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  ListTransfers(argument: _taprpc_ListTransfersRequestPartial, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _taprpc_ListTransfersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _taprpc_ListTransfersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _taprpc_ListTransfersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _taprpc_ListTransfersRequestPartial, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  
  ListUtxos(argument: _taprpc_ListUtxosRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  ListUtxos(argument: _taprpc_ListUtxosRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  ListUtxos(argument: _taprpc_ListUtxosRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  ListUtxos(argument: _taprpc_ListUtxosRequestPartial, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _taprpc_ListUtxosRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _taprpc_ListUtxosRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _taprpc_ListUtxosRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _taprpc_ListUtxosRequestPartial, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  
  NewAddr(argument: _taprpc_NewAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  NewAddr(argument: _taprpc_NewAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  NewAddr(argument: _taprpc_NewAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  NewAddr(argument: _taprpc_NewAddrRequestPartial, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _taprpc_NewAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _taprpc_NewAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _taprpc_NewAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _taprpc_NewAddrRequestPartial, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  
  QueryAddrs(argument: _taprpc_QueryAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _taprpc_QueryAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _taprpc_QueryAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _taprpc_QueryAddrRequestPartial, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _taprpc_QueryAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _taprpc_QueryAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _taprpc_QueryAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _taprpc_QueryAddrRequestPartial, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  
  SendAsset(argument: _taprpc_SendAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  SendAsset(argument: _taprpc_SendAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  SendAsset(argument: _taprpc_SendAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  SendAsset(argument: _taprpc_SendAssetRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _taprpc_SendAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _taprpc_SendAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _taprpc_SendAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _taprpc_SendAssetRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  
  StopDaemon(argument: _taprpc_StopRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _taprpc_StopRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _taprpc_StopRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _taprpc_StopRequestPartial, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _taprpc_StopRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _taprpc_StopRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _taprpc_StopRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _taprpc_StopRequestPartial, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  
  SubscribeSendAssetEventNtfns(argument: _taprpc_SubscribeSendAssetEventNtfnsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_SendAssetEvent>;
  SubscribeSendAssetEventNtfns(argument: _taprpc_SubscribeSendAssetEventNtfnsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_SendAssetEvent>;
  subscribeSendAssetEventNtfns(argument: _taprpc_SubscribeSendAssetEventNtfnsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_SendAssetEvent>;
  subscribeSendAssetEventNtfns(argument: _taprpc_SubscribeSendAssetEventNtfnsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_SendAssetEvent>;
  
  VerifyProof(argument: _taprpc_ProofFilePartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  VerifyProof(argument: _taprpc_ProofFilePartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  VerifyProof(argument: _taprpc_ProofFilePartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  VerifyProof(argument: _taprpc_ProofFilePartial, callback: grpc.requestCallback<_taprpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _taprpc_ProofFilePartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _taprpc_ProofFilePartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _taprpc_ProofFilePartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _taprpc_ProofFilePartial, callback: grpc.requestCallback<_taprpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  
}

export interface TaprootAssetsHandlers extends grpc.UntypedServiceImplementation {
  AddrReceives: grpc.handleUnaryCall<_taprpc_AddrReceivesRequest, _taprpc_AddrReceivesResponsePartial>;
  
  DebugLevel: grpc.handleUnaryCall<_taprpc_DebugLevelRequest, _taprpc_DebugLevelResponsePartial>;
  
  DecodeAddr: grpc.handleUnaryCall<_taprpc_DecodeAddrRequest, _taprpc_AddrPartial>;
  
  ExportProof: grpc.handleUnaryCall<_taprpc_ExportProofRequest, _taprpc_ProofFilePartial>;
  
  FetchAssetMeta: grpc.handleUnaryCall<_taprpc_FetchAssetMetaRequest, _taprpc_AssetMetaPartial>;
  
  ImportProof: grpc.handleUnaryCall<_taprpc_ImportProofRequest, _taprpc_ImportProofResponsePartial>;
  
  ListAssets: grpc.handleUnaryCall<_taprpc_ListAssetRequest, _taprpc_ListAssetResponsePartial>;
  
  ListBalances: grpc.handleUnaryCall<_taprpc_ListBalancesRequest, _taprpc_ListBalancesResponsePartial>;
  
  ListGroups: grpc.handleUnaryCall<_taprpc_ListGroupsRequest, _taprpc_ListGroupsResponsePartial>;
  
  ListTransfers: grpc.handleUnaryCall<_taprpc_ListTransfersRequest, _taprpc_ListTransfersResponsePartial>;
  
  ListUtxos: grpc.handleUnaryCall<_taprpc_ListUtxosRequest, _taprpc_ListUtxosResponsePartial>;
  
  NewAddr: grpc.handleUnaryCall<_taprpc_NewAddrRequest, _taprpc_AddrPartial>;
  
  QueryAddrs: grpc.handleUnaryCall<_taprpc_QueryAddrRequest, _taprpc_QueryAddrResponsePartial>;
  
  SendAsset: grpc.handleUnaryCall<_taprpc_SendAssetRequest, _taprpc_SendAssetResponsePartial>;
  
  StopDaemon: grpc.handleUnaryCall<_taprpc_StopRequest, _taprpc_StopResponsePartial>;
  
  SubscribeSendAssetEventNtfns: grpc.handleServerStreamingCall<_taprpc_SubscribeSendAssetEventNtfnsRequest, _taprpc_SendAssetEventPartial>;
  
  VerifyProof: grpc.handleUnaryCall<_taprpc_ProofFile, _taprpc_ProofVerifyResponsePartial>;
  
}

export interface TaprootAssetsDefinition extends grpc.ServiceDefinition {
  AddrReceives: MethodDefinition<_taprpc_AddrReceivesRequestPartial, _taprpc_AddrReceivesResponsePartial, _taprpc_AddrReceivesRequest, _taprpc_AddrReceivesResponse>
  DebugLevel: MethodDefinition<_taprpc_DebugLevelRequestPartial, _taprpc_DebugLevelResponsePartial, _taprpc_DebugLevelRequest, _taprpc_DebugLevelResponse>
  DecodeAddr: MethodDefinition<_taprpc_DecodeAddrRequestPartial, _taprpc_AddrPartial, _taprpc_DecodeAddrRequest, _taprpc_Addr>
  ExportProof: MethodDefinition<_taprpc_ExportProofRequestPartial, _taprpc_ProofFilePartial, _taprpc_ExportProofRequest, _taprpc_ProofFile>
  FetchAssetMeta: MethodDefinition<_taprpc_FetchAssetMetaRequestPartial, _taprpc_AssetMetaPartial, _taprpc_FetchAssetMetaRequest, _taprpc_AssetMeta>
  ImportProof: MethodDefinition<_taprpc_ImportProofRequestPartial, _taprpc_ImportProofResponsePartial, _taprpc_ImportProofRequest, _taprpc_ImportProofResponse>
  ListAssets: MethodDefinition<_taprpc_ListAssetRequestPartial, _taprpc_ListAssetResponsePartial, _taprpc_ListAssetRequest, _taprpc_ListAssetResponse>
  ListBalances: MethodDefinition<_taprpc_ListBalancesRequestPartial, _taprpc_ListBalancesResponsePartial, _taprpc_ListBalancesRequest, _taprpc_ListBalancesResponse>
  ListGroups: MethodDefinition<_taprpc_ListGroupsRequestPartial, _taprpc_ListGroupsResponsePartial, _taprpc_ListGroupsRequest, _taprpc_ListGroupsResponse>
  ListTransfers: MethodDefinition<_taprpc_ListTransfersRequestPartial, _taprpc_ListTransfersResponsePartial, _taprpc_ListTransfersRequest, _taprpc_ListTransfersResponse>
  ListUtxos: MethodDefinition<_taprpc_ListUtxosRequestPartial, _taprpc_ListUtxosResponsePartial, _taprpc_ListUtxosRequest, _taprpc_ListUtxosResponse>
  NewAddr: MethodDefinition<_taprpc_NewAddrRequestPartial, _taprpc_AddrPartial, _taprpc_NewAddrRequest, _taprpc_Addr>
  QueryAddrs: MethodDefinition<_taprpc_QueryAddrRequestPartial, _taprpc_QueryAddrResponsePartial, _taprpc_QueryAddrRequest, _taprpc_QueryAddrResponse>
  SendAsset: MethodDefinition<_taprpc_SendAssetRequestPartial, _taprpc_SendAssetResponsePartial, _taprpc_SendAssetRequest, _taprpc_SendAssetResponse>
  StopDaemon: MethodDefinition<_taprpc_StopRequestPartial, _taprpc_StopResponsePartial, _taprpc_StopRequest, _taprpc_StopResponse>
  SubscribeSendAssetEventNtfns: MethodDefinition<_taprpc_SubscribeSendAssetEventNtfnsRequestPartial, _taprpc_SendAssetEventPartial, _taprpc_SubscribeSendAssetEventNtfnsRequest, _taprpc_SendAssetEvent>
  VerifyProof: MethodDefinition<_taprpc_ProofFilePartial, _taprpc_ProofVerifyResponsePartial, _taprpc_ProofFile, _taprpc_ProofVerifyResponse>
}
