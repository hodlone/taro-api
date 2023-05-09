// Original file: protos/taro.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddrPartial as _tarorpc_AddrPartial, Addr as _tarorpc_Addr } from '../tarorpc/Addr';
import type { AddrReceivesRequestPartial as _tarorpc_AddrReceivesRequestPartial, AddrReceivesRequest as _tarorpc_AddrReceivesRequest } from '../tarorpc/AddrReceivesRequest';
import type { AddrReceivesResponsePartial as _tarorpc_AddrReceivesResponsePartial, AddrReceivesResponse as _tarorpc_AddrReceivesResponse } from '../tarorpc/AddrReceivesResponse';
import type { AssetMetaPartial as _tarorpc_AssetMetaPartial, AssetMeta as _tarorpc_AssetMeta } from '../tarorpc/AssetMeta';
import type { DebugLevelRequestPartial as _tarorpc_DebugLevelRequestPartial, DebugLevelRequest as _tarorpc_DebugLevelRequest } from '../tarorpc/DebugLevelRequest';
import type { DebugLevelResponsePartial as _tarorpc_DebugLevelResponsePartial, DebugLevelResponse as _tarorpc_DebugLevelResponse } from '../tarorpc/DebugLevelResponse';
import type { DecodeAddrRequestPartial as _tarorpc_DecodeAddrRequestPartial, DecodeAddrRequest as _tarorpc_DecodeAddrRequest } from '../tarorpc/DecodeAddrRequest';
import type { ExportProofRequestPartial as _tarorpc_ExportProofRequestPartial, ExportProofRequest as _tarorpc_ExportProofRequest } from '../tarorpc/ExportProofRequest';
import type { FetchAssetMetaRequestPartial as _tarorpc_FetchAssetMetaRequestPartial, FetchAssetMetaRequest as _tarorpc_FetchAssetMetaRequest } from '../tarorpc/FetchAssetMetaRequest';
import type { ImportProofRequestPartial as _tarorpc_ImportProofRequestPartial, ImportProofRequest as _tarorpc_ImportProofRequest } from '../tarorpc/ImportProofRequest';
import type { ImportProofResponsePartial as _tarorpc_ImportProofResponsePartial, ImportProofResponse as _tarorpc_ImportProofResponse } from '../tarorpc/ImportProofResponse';
import type { ListAssetRequestPartial as _tarorpc_ListAssetRequestPartial, ListAssetRequest as _tarorpc_ListAssetRequest } from '../tarorpc/ListAssetRequest';
import type { ListAssetResponsePartial as _tarorpc_ListAssetResponsePartial, ListAssetResponse as _tarorpc_ListAssetResponse } from '../tarorpc/ListAssetResponse';
import type { ListBalancesRequestPartial as _tarorpc_ListBalancesRequestPartial, ListBalancesRequest as _tarorpc_ListBalancesRequest } from '../tarorpc/ListBalancesRequest';
import type { ListBalancesResponsePartial as _tarorpc_ListBalancesResponsePartial, ListBalancesResponse as _tarorpc_ListBalancesResponse } from '../tarorpc/ListBalancesResponse';
import type { ListGroupsRequestPartial as _tarorpc_ListGroupsRequestPartial, ListGroupsRequest as _tarorpc_ListGroupsRequest } from '../tarorpc/ListGroupsRequest';
import type { ListGroupsResponsePartial as _tarorpc_ListGroupsResponsePartial, ListGroupsResponse as _tarorpc_ListGroupsResponse } from '../tarorpc/ListGroupsResponse';
import type { ListTransfersRequestPartial as _tarorpc_ListTransfersRequestPartial, ListTransfersRequest as _tarorpc_ListTransfersRequest } from '../tarorpc/ListTransfersRequest';
import type { ListTransfersResponsePartial as _tarorpc_ListTransfersResponsePartial, ListTransfersResponse as _tarorpc_ListTransfersResponse } from '../tarorpc/ListTransfersResponse';
import type { ListUtxosRequestPartial as _tarorpc_ListUtxosRequestPartial, ListUtxosRequest as _tarorpc_ListUtxosRequest } from '../tarorpc/ListUtxosRequest';
import type { ListUtxosResponsePartial as _tarorpc_ListUtxosResponsePartial, ListUtxosResponse as _tarorpc_ListUtxosResponse } from '../tarorpc/ListUtxosResponse';
import type { NewAddrRequestPartial as _tarorpc_NewAddrRequestPartial, NewAddrRequest as _tarorpc_NewAddrRequest } from '../tarorpc/NewAddrRequest';
import type { ProofFilePartial as _tarorpc_ProofFilePartial, ProofFile as _tarorpc_ProofFile } from '../tarorpc/ProofFile';
import type { ProofVerifyResponsePartial as _tarorpc_ProofVerifyResponsePartial, ProofVerifyResponse as _tarorpc_ProofVerifyResponse } from '../tarorpc/ProofVerifyResponse';
import type { QueryAddrRequestPartial as _tarorpc_QueryAddrRequestPartial, QueryAddrRequest as _tarorpc_QueryAddrRequest } from '../tarorpc/QueryAddrRequest';
import type { QueryAddrResponsePartial as _tarorpc_QueryAddrResponsePartial, QueryAddrResponse as _tarorpc_QueryAddrResponse } from '../tarorpc/QueryAddrResponse';
import type { SendAssetEventPartial as _tarorpc_SendAssetEventPartial, SendAssetEvent as _tarorpc_SendAssetEvent } from '../tarorpc/SendAssetEvent';
import type { SendAssetRequestPartial as _tarorpc_SendAssetRequestPartial, SendAssetRequest as _tarorpc_SendAssetRequest } from '../tarorpc/SendAssetRequest';
import type { SendAssetResponsePartial as _tarorpc_SendAssetResponsePartial, SendAssetResponse as _tarorpc_SendAssetResponse } from '../tarorpc/SendAssetResponse';
import type { StopRequestPartial as _tarorpc_StopRequestPartial, StopRequest as _tarorpc_StopRequest } from '../tarorpc/StopRequest';
import type { StopResponsePartial as _tarorpc_StopResponsePartial, StopResponse as _tarorpc_StopResponse } from '../tarorpc/StopResponse';
import type { SubscribeSendAssetEventNtfnsRequestPartial as _tarorpc_SubscribeSendAssetEventNtfnsRequestPartial, SubscribeSendAssetEventNtfnsRequest as _tarorpc_SubscribeSendAssetEventNtfnsRequest } from '../tarorpc/SubscribeSendAssetEventNtfnsRequest';

export interface TaroClient extends grpc.Client {
  AddrReceives(argument: _tarorpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  AddrReceives(argument: _tarorpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  AddrReceives(argument: _tarorpc_AddrReceivesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  AddrReceives(argument: _tarorpc_AddrReceivesRequestPartial, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _tarorpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _tarorpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _tarorpc_AddrReceivesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _tarorpc_AddrReceivesRequestPartial, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  
  DebugLevel(argument: _tarorpc_DebugLevelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _tarorpc_DebugLevelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _tarorpc_DebugLevelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _tarorpc_DebugLevelRequestPartial, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _tarorpc_DebugLevelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _tarorpc_DebugLevelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _tarorpc_DebugLevelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _tarorpc_DebugLevelRequestPartial, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  
  DecodeAddr(argument: _tarorpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _tarorpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _tarorpc_DecodeAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _tarorpc_DecodeAddrRequestPartial, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _tarorpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _tarorpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _tarorpc_DecodeAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _tarorpc_DecodeAddrRequestPartial, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  
  ExportProof(argument: _tarorpc_ExportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofFile>): grpc.ClientUnaryCall;
  ExportProof(argument: _tarorpc_ExportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ProofFile>): grpc.ClientUnaryCall;
  ExportProof(argument: _tarorpc_ExportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofFile>): grpc.ClientUnaryCall;
  ExportProof(argument: _tarorpc_ExportProofRequestPartial, callback: grpc.requestCallback<_tarorpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _tarorpc_ExportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _tarorpc_ExportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _tarorpc_ExportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _tarorpc_ExportProofRequestPartial, callback: grpc.requestCallback<_tarorpc_ProofFile>): grpc.ClientUnaryCall;
  
  FetchAssetMeta(argument: _tarorpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AssetMeta>): grpc.ClientUnaryCall;
  FetchAssetMeta(argument: _tarorpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_AssetMeta>): grpc.ClientUnaryCall;
  FetchAssetMeta(argument: _tarorpc_FetchAssetMetaRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AssetMeta>): grpc.ClientUnaryCall;
  FetchAssetMeta(argument: _tarorpc_FetchAssetMetaRequestPartial, callback: grpc.requestCallback<_tarorpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _tarorpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _tarorpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _tarorpc_FetchAssetMetaRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _tarorpc_FetchAssetMetaRequestPartial, callback: grpc.requestCallback<_tarorpc_AssetMeta>): grpc.ClientUnaryCall;
  
  ImportProof(argument: _tarorpc_ImportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ImportProofResponse>): grpc.ClientUnaryCall;
  ImportProof(argument: _tarorpc_ImportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ImportProofResponse>): grpc.ClientUnaryCall;
  ImportProof(argument: _tarorpc_ImportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ImportProofResponse>): grpc.ClientUnaryCall;
  ImportProof(argument: _tarorpc_ImportProofRequestPartial, callback: grpc.requestCallback<_tarorpc_ImportProofResponse>): grpc.ClientUnaryCall;
  importProof(argument: _tarorpc_ImportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ImportProofResponse>): grpc.ClientUnaryCall;
  importProof(argument: _tarorpc_ImportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ImportProofResponse>): grpc.ClientUnaryCall;
  importProof(argument: _tarorpc_ImportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ImportProofResponse>): grpc.ClientUnaryCall;
  importProof(argument: _tarorpc_ImportProofRequestPartial, callback: grpc.requestCallback<_tarorpc_ImportProofResponse>): grpc.ClientUnaryCall;
  
  ListAssets(argument: _tarorpc_ListAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListAssetResponse>): grpc.ClientUnaryCall;
  ListAssets(argument: _tarorpc_ListAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListAssetResponse>): grpc.ClientUnaryCall;
  ListAssets(argument: _tarorpc_ListAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListAssetResponse>): grpc.ClientUnaryCall;
  ListAssets(argument: _tarorpc_ListAssetRequestPartial, callback: grpc.requestCallback<_tarorpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _tarorpc_ListAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _tarorpc_ListAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _tarorpc_ListAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _tarorpc_ListAssetRequestPartial, callback: grpc.requestCallback<_tarorpc_ListAssetResponse>): grpc.ClientUnaryCall;
  
  ListBalances(argument: _tarorpc_ListBalancesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  ListBalances(argument: _tarorpc_ListBalancesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  ListBalances(argument: _tarorpc_ListBalancesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  ListBalances(argument: _tarorpc_ListBalancesRequestPartial, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _tarorpc_ListBalancesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _tarorpc_ListBalancesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _tarorpc_ListBalancesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _tarorpc_ListBalancesRequestPartial, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  
  ListGroups(argument: _tarorpc_ListGroupsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  ListGroups(argument: _tarorpc_ListGroupsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  ListGroups(argument: _tarorpc_ListGroupsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  ListGroups(argument: _tarorpc_ListGroupsRequestPartial, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _tarorpc_ListGroupsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _tarorpc_ListGroupsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _tarorpc_ListGroupsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _tarorpc_ListGroupsRequestPartial, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  
  ListTransfers(argument: _tarorpc_ListTransfersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  ListTransfers(argument: _tarorpc_ListTransfersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  ListTransfers(argument: _tarorpc_ListTransfersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  ListTransfers(argument: _tarorpc_ListTransfersRequestPartial, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _tarorpc_ListTransfersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _tarorpc_ListTransfersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _tarorpc_ListTransfersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _tarorpc_ListTransfersRequestPartial, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  
  ListUtxos(argument: _tarorpc_ListUtxosRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  ListUtxos(argument: _tarorpc_ListUtxosRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  ListUtxos(argument: _tarorpc_ListUtxosRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  ListUtxos(argument: _tarorpc_ListUtxosRequestPartial, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _tarorpc_ListUtxosRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _tarorpc_ListUtxosRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _tarorpc_ListUtxosRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _tarorpc_ListUtxosRequestPartial, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  
  NewAddr(argument: _tarorpc_NewAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  NewAddr(argument: _tarorpc_NewAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  NewAddr(argument: _tarorpc_NewAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  NewAddr(argument: _tarorpc_NewAddrRequestPartial, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _tarorpc_NewAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _tarorpc_NewAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _tarorpc_NewAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _tarorpc_NewAddrRequestPartial, callback: grpc.requestCallback<_tarorpc_Addr>): grpc.ClientUnaryCall;
  
  QueryAddrs(argument: _tarorpc_QueryAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _tarorpc_QueryAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _tarorpc_QueryAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _tarorpc_QueryAddrRequestPartial, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _tarorpc_QueryAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _tarorpc_QueryAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _tarorpc_QueryAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _tarorpc_QueryAddrRequestPartial, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  
  SendAsset(argument: _tarorpc_SendAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_SendAssetResponse>): grpc.ClientUnaryCall;
  SendAsset(argument: _tarorpc_SendAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_SendAssetResponse>): grpc.ClientUnaryCall;
  SendAsset(argument: _tarorpc_SendAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_SendAssetResponse>): grpc.ClientUnaryCall;
  SendAsset(argument: _tarorpc_SendAssetRequestPartial, callback: grpc.requestCallback<_tarorpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _tarorpc_SendAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _tarorpc_SendAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _tarorpc_SendAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _tarorpc_SendAssetRequestPartial, callback: grpc.requestCallback<_tarorpc_SendAssetResponse>): grpc.ClientUnaryCall;
  
  StopDaemon(argument: _tarorpc_StopRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _tarorpc_StopRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _tarorpc_StopRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _tarorpc_StopRequestPartial, callback: grpc.requestCallback<_tarorpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _tarorpc_StopRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _tarorpc_StopRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _tarorpc_StopRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _tarorpc_StopRequestPartial, callback: grpc.requestCallback<_tarorpc_StopResponse>): grpc.ClientUnaryCall;
  
  SubscribeSendAssetEventNtfns(argument: _tarorpc_SubscribeSendAssetEventNtfnsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tarorpc_SendAssetEvent>;
  SubscribeSendAssetEventNtfns(argument: _tarorpc_SubscribeSendAssetEventNtfnsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tarorpc_SendAssetEvent>;
  subscribeSendAssetEventNtfns(argument: _tarorpc_SubscribeSendAssetEventNtfnsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tarorpc_SendAssetEvent>;
  subscribeSendAssetEventNtfns(argument: _tarorpc_SubscribeSendAssetEventNtfnsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tarorpc_SendAssetEvent>;
  
  VerifyProof(argument: _tarorpc_ProofFilePartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  VerifyProof(argument: _tarorpc_ProofFilePartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  VerifyProof(argument: _tarorpc_ProofFilePartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  VerifyProof(argument: _tarorpc_ProofFilePartial, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _tarorpc_ProofFilePartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _tarorpc_ProofFilePartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _tarorpc_ProofFilePartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _tarorpc_ProofFilePartial, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse>): grpc.ClientUnaryCall;
  
}

export interface TaroHandlers extends grpc.UntypedServiceImplementation {
  AddrReceives: grpc.handleUnaryCall<_tarorpc_AddrReceivesRequest, _tarorpc_AddrReceivesResponsePartial>;
  
  DebugLevel: grpc.handleUnaryCall<_tarorpc_DebugLevelRequest, _tarorpc_DebugLevelResponsePartial>;
  
  DecodeAddr: grpc.handleUnaryCall<_tarorpc_DecodeAddrRequest, _tarorpc_AddrPartial>;
  
  ExportProof: grpc.handleUnaryCall<_tarorpc_ExportProofRequest, _tarorpc_ProofFilePartial>;
  
  FetchAssetMeta: grpc.handleUnaryCall<_tarorpc_FetchAssetMetaRequest, _tarorpc_AssetMetaPartial>;
  
  ImportProof: grpc.handleUnaryCall<_tarorpc_ImportProofRequest, _tarorpc_ImportProofResponsePartial>;
  
  ListAssets: grpc.handleUnaryCall<_tarorpc_ListAssetRequest, _tarorpc_ListAssetResponsePartial>;
  
  ListBalances: grpc.handleUnaryCall<_tarorpc_ListBalancesRequest, _tarorpc_ListBalancesResponsePartial>;
  
  ListGroups: grpc.handleUnaryCall<_tarorpc_ListGroupsRequest, _tarorpc_ListGroupsResponsePartial>;
  
  ListTransfers: grpc.handleUnaryCall<_tarorpc_ListTransfersRequest, _tarorpc_ListTransfersResponsePartial>;
  
  ListUtxos: grpc.handleUnaryCall<_tarorpc_ListUtxosRequest, _tarorpc_ListUtxosResponsePartial>;
  
  NewAddr: grpc.handleUnaryCall<_tarorpc_NewAddrRequest, _tarorpc_AddrPartial>;
  
  QueryAddrs: grpc.handleUnaryCall<_tarorpc_QueryAddrRequest, _tarorpc_QueryAddrResponsePartial>;
  
  SendAsset: grpc.handleUnaryCall<_tarorpc_SendAssetRequest, _tarorpc_SendAssetResponsePartial>;
  
  StopDaemon: grpc.handleUnaryCall<_tarorpc_StopRequest, _tarorpc_StopResponsePartial>;
  
  SubscribeSendAssetEventNtfns: grpc.handleServerStreamingCall<_tarorpc_SubscribeSendAssetEventNtfnsRequest, _tarorpc_SendAssetEventPartial>;
  
  VerifyProof: grpc.handleUnaryCall<_tarorpc_ProofFile, _tarorpc_ProofVerifyResponsePartial>;
  
}

export interface TaroDefinition extends grpc.ServiceDefinition {
  AddrReceives: MethodDefinition<_tarorpc_AddrReceivesRequestPartial, _tarorpc_AddrReceivesResponsePartial, _tarorpc_AddrReceivesRequest, _tarorpc_AddrReceivesResponse>
  DebugLevel: MethodDefinition<_tarorpc_DebugLevelRequestPartial, _tarorpc_DebugLevelResponsePartial, _tarorpc_DebugLevelRequest, _tarorpc_DebugLevelResponse>
  DecodeAddr: MethodDefinition<_tarorpc_DecodeAddrRequestPartial, _tarorpc_AddrPartial, _tarorpc_DecodeAddrRequest, _tarorpc_Addr>
  ExportProof: MethodDefinition<_tarorpc_ExportProofRequestPartial, _tarorpc_ProofFilePartial, _tarorpc_ExportProofRequest, _tarorpc_ProofFile>
  FetchAssetMeta: MethodDefinition<_tarorpc_FetchAssetMetaRequestPartial, _tarorpc_AssetMetaPartial, _tarorpc_FetchAssetMetaRequest, _tarorpc_AssetMeta>
  ImportProof: MethodDefinition<_tarorpc_ImportProofRequestPartial, _tarorpc_ImportProofResponsePartial, _tarorpc_ImportProofRequest, _tarorpc_ImportProofResponse>
  ListAssets: MethodDefinition<_tarorpc_ListAssetRequestPartial, _tarorpc_ListAssetResponsePartial, _tarorpc_ListAssetRequest, _tarorpc_ListAssetResponse>
  ListBalances: MethodDefinition<_tarorpc_ListBalancesRequestPartial, _tarorpc_ListBalancesResponsePartial, _tarorpc_ListBalancesRequest, _tarorpc_ListBalancesResponse>
  ListGroups: MethodDefinition<_tarorpc_ListGroupsRequestPartial, _tarorpc_ListGroupsResponsePartial, _tarorpc_ListGroupsRequest, _tarorpc_ListGroupsResponse>
  ListTransfers: MethodDefinition<_tarorpc_ListTransfersRequestPartial, _tarorpc_ListTransfersResponsePartial, _tarorpc_ListTransfersRequest, _tarorpc_ListTransfersResponse>
  ListUtxos: MethodDefinition<_tarorpc_ListUtxosRequestPartial, _tarorpc_ListUtxosResponsePartial, _tarorpc_ListUtxosRequest, _tarorpc_ListUtxosResponse>
  NewAddr: MethodDefinition<_tarorpc_NewAddrRequestPartial, _tarorpc_AddrPartial, _tarorpc_NewAddrRequest, _tarorpc_Addr>
  QueryAddrs: MethodDefinition<_tarorpc_QueryAddrRequestPartial, _tarorpc_QueryAddrResponsePartial, _tarorpc_QueryAddrRequest, _tarorpc_QueryAddrResponse>
  SendAsset: MethodDefinition<_tarorpc_SendAssetRequestPartial, _tarorpc_SendAssetResponsePartial, _tarorpc_SendAssetRequest, _tarorpc_SendAssetResponse>
  StopDaemon: MethodDefinition<_tarorpc_StopRequestPartial, _tarorpc_StopResponsePartial, _tarorpc_StopRequest, _tarorpc_StopResponse>
  SubscribeSendAssetEventNtfns: MethodDefinition<_tarorpc_SubscribeSendAssetEventNtfnsRequestPartial, _tarorpc_SendAssetEventPartial, _tarorpc_SubscribeSendAssetEventNtfnsRequest, _tarorpc_SendAssetEvent>
  VerifyProof: MethodDefinition<_tarorpc_ProofFilePartial, _tarorpc_ProofVerifyResponsePartial, _tarorpc_ProofFile, _tarorpc_ProofVerifyResponse>
}
