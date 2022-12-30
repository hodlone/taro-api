// Original file: protos/taro.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Addr as _tarorpc_Addr, Addr__Output as _tarorpc_Addr__Output } from '../tarorpc/Addr';
import type { AddrReceivesRequest as _tarorpc_AddrReceivesRequest, AddrReceivesRequest__Output as _tarorpc_AddrReceivesRequest__Output } from '../tarorpc/AddrReceivesRequest';
import type { AddrReceivesResponse as _tarorpc_AddrReceivesResponse, AddrReceivesResponse__Output as _tarorpc_AddrReceivesResponse__Output } from '../tarorpc/AddrReceivesResponse';
import type { DebugLevelRequest as _tarorpc_DebugLevelRequest, DebugLevelRequest__Output as _tarorpc_DebugLevelRequest__Output } from '../tarorpc/DebugLevelRequest';
import type { DebugLevelResponse as _tarorpc_DebugLevelResponse, DebugLevelResponse__Output as _tarorpc_DebugLevelResponse__Output } from '../tarorpc/DebugLevelResponse';
import type { DecodeAddrRequest as _tarorpc_DecodeAddrRequest, DecodeAddrRequest__Output as _tarorpc_DecodeAddrRequest__Output } from '../tarorpc/DecodeAddrRequest';
import type { ExportProofRequest as _tarorpc_ExportProofRequest, ExportProofRequest__Output as _tarorpc_ExportProofRequest__Output } from '../tarorpc/ExportProofRequest';
import type { ImportProofRequest as _tarorpc_ImportProofRequest, ImportProofRequest__Output as _tarorpc_ImportProofRequest__Output } from '../tarorpc/ImportProofRequest';
import type { ImportProofResponse as _tarorpc_ImportProofResponse, ImportProofResponse__Output as _tarorpc_ImportProofResponse__Output } from '../tarorpc/ImportProofResponse';
import type { ListAssetRequest as _tarorpc_ListAssetRequest, ListAssetRequest__Output as _tarorpc_ListAssetRequest__Output } from '../tarorpc/ListAssetRequest';
import type { ListAssetResponse as _tarorpc_ListAssetResponse, ListAssetResponse__Output as _tarorpc_ListAssetResponse__Output } from '../tarorpc/ListAssetResponse';
import type { ListBalancesRequest as _tarorpc_ListBalancesRequest, ListBalancesRequest__Output as _tarorpc_ListBalancesRequest__Output } from '../tarorpc/ListBalancesRequest';
import type { ListBalancesResponse as _tarorpc_ListBalancesResponse, ListBalancesResponse__Output as _tarorpc_ListBalancesResponse__Output } from '../tarorpc/ListBalancesResponse';
import type { ListGroupsRequest as _tarorpc_ListGroupsRequest, ListGroupsRequest__Output as _tarorpc_ListGroupsRequest__Output } from '../tarorpc/ListGroupsRequest';
import type { ListGroupsResponse as _tarorpc_ListGroupsResponse, ListGroupsResponse__Output as _tarorpc_ListGroupsResponse__Output } from '../tarorpc/ListGroupsResponse';
import type { ListTransfersRequest as _tarorpc_ListTransfersRequest, ListTransfersRequest__Output as _tarorpc_ListTransfersRequest__Output } from '../tarorpc/ListTransfersRequest';
import type { ListTransfersResponse as _tarorpc_ListTransfersResponse, ListTransfersResponse__Output as _tarorpc_ListTransfersResponse__Output } from '../tarorpc/ListTransfersResponse';
import type { ListUtxosRequest as _tarorpc_ListUtxosRequest, ListUtxosRequest__Output as _tarorpc_ListUtxosRequest__Output } from '../tarorpc/ListUtxosRequest';
import type { ListUtxosResponse as _tarorpc_ListUtxosResponse, ListUtxosResponse__Output as _tarorpc_ListUtxosResponse__Output } from '../tarorpc/ListUtxosResponse';
import type { MintAssetRequest as _tarorpc_MintAssetRequest, MintAssetRequest__Output as _tarorpc_MintAssetRequest__Output } from '../tarorpc/MintAssetRequest';
import type { MintAssetResponse as _tarorpc_MintAssetResponse, MintAssetResponse__Output as _tarorpc_MintAssetResponse__Output } from '../tarorpc/MintAssetResponse';
import type { NewAddrRequest as _tarorpc_NewAddrRequest, NewAddrRequest__Output as _tarorpc_NewAddrRequest__Output } from '../tarorpc/NewAddrRequest';
import type { ProofFile as _tarorpc_ProofFile, ProofFile__Output as _tarorpc_ProofFile__Output } from '../tarorpc/ProofFile';
import type { ProofVerifyResponse as _tarorpc_ProofVerifyResponse, ProofVerifyResponse__Output as _tarorpc_ProofVerifyResponse__Output } from '../tarorpc/ProofVerifyResponse';
import type { QueryAddrRequest as _tarorpc_QueryAddrRequest, QueryAddrRequest__Output as _tarorpc_QueryAddrRequest__Output } from '../tarorpc/QueryAddrRequest';
import type { QueryAddrResponse as _tarorpc_QueryAddrResponse, QueryAddrResponse__Output as _tarorpc_QueryAddrResponse__Output } from '../tarorpc/QueryAddrResponse';
import type { SendAssetRequest as _tarorpc_SendAssetRequest, SendAssetRequest__Output as _tarorpc_SendAssetRequest__Output } from '../tarorpc/SendAssetRequest';
import type { SendAssetResponse as _tarorpc_SendAssetResponse, SendAssetResponse__Output as _tarorpc_SendAssetResponse__Output } from '../tarorpc/SendAssetResponse';
import type { StopRequest as _tarorpc_StopRequest, StopRequest__Output as _tarorpc_StopRequest__Output } from '../tarorpc/StopRequest';
import type { StopResponse as _tarorpc_StopResponse, StopResponse__Output as _tarorpc_StopResponse__Output } from '../tarorpc/StopResponse';

export interface TaroClient extends grpc.Client {
  AddrReceives(argument: _tarorpc_AddrReceivesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse__Output>): grpc.ClientUnaryCall;
  AddrReceives(argument: _tarorpc_AddrReceivesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse__Output>): grpc.ClientUnaryCall;
  AddrReceives(argument: _tarorpc_AddrReceivesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse__Output>): grpc.ClientUnaryCall;
  AddrReceives(argument: _tarorpc_AddrReceivesRequest, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse__Output>): grpc.ClientUnaryCall;
  addrReceives(argument: _tarorpc_AddrReceivesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse__Output>): grpc.ClientUnaryCall;
  addrReceives(argument: _tarorpc_AddrReceivesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse__Output>): grpc.ClientUnaryCall;
  addrReceives(argument: _tarorpc_AddrReceivesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse__Output>): grpc.ClientUnaryCall;
  addrReceives(argument: _tarorpc_AddrReceivesRequest, callback: grpc.requestCallback<_tarorpc_AddrReceivesResponse__Output>): grpc.ClientUnaryCall;
  
  DebugLevel(argument: _tarorpc_DebugLevelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse__Output>): grpc.ClientUnaryCall;
  DebugLevel(argument: _tarorpc_DebugLevelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse__Output>): grpc.ClientUnaryCall;
  DebugLevel(argument: _tarorpc_DebugLevelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse__Output>): grpc.ClientUnaryCall;
  DebugLevel(argument: _tarorpc_DebugLevelRequest, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse__Output>): grpc.ClientUnaryCall;
  debugLevel(argument: _tarorpc_DebugLevelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse__Output>): grpc.ClientUnaryCall;
  debugLevel(argument: _tarorpc_DebugLevelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse__Output>): grpc.ClientUnaryCall;
  debugLevel(argument: _tarorpc_DebugLevelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse__Output>): grpc.ClientUnaryCall;
  debugLevel(argument: _tarorpc_DebugLevelRequest, callback: grpc.requestCallback<_tarorpc_DebugLevelResponse__Output>): grpc.ClientUnaryCall;
  
  DecodeAddr(argument: _tarorpc_DecodeAddrRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _tarorpc_DecodeAddrRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _tarorpc_DecodeAddrRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _tarorpc_DecodeAddrRequest, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  decodeAddr(argument: _tarorpc_DecodeAddrRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  decodeAddr(argument: _tarorpc_DecodeAddrRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  decodeAddr(argument: _tarorpc_DecodeAddrRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  decodeAddr(argument: _tarorpc_DecodeAddrRequest, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  
  ExportProof(argument: _tarorpc_ExportProofRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofFile__Output>): grpc.ClientUnaryCall;
  ExportProof(argument: _tarorpc_ExportProofRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ProofFile__Output>): grpc.ClientUnaryCall;
  ExportProof(argument: _tarorpc_ExportProofRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofFile__Output>): grpc.ClientUnaryCall;
  ExportProof(argument: _tarorpc_ExportProofRequest, callback: grpc.requestCallback<_tarorpc_ProofFile__Output>): grpc.ClientUnaryCall;
  exportProof(argument: _tarorpc_ExportProofRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofFile__Output>): grpc.ClientUnaryCall;
  exportProof(argument: _tarorpc_ExportProofRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ProofFile__Output>): grpc.ClientUnaryCall;
  exportProof(argument: _tarorpc_ExportProofRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofFile__Output>): grpc.ClientUnaryCall;
  exportProof(argument: _tarorpc_ExportProofRequest, callback: grpc.requestCallback<_tarorpc_ProofFile__Output>): grpc.ClientUnaryCall;
  
  ImportProof(argument: _tarorpc_ImportProofRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ImportProofResponse__Output>): grpc.ClientUnaryCall;
  ImportProof(argument: _tarorpc_ImportProofRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ImportProofResponse__Output>): grpc.ClientUnaryCall;
  ImportProof(argument: _tarorpc_ImportProofRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ImportProofResponse__Output>): grpc.ClientUnaryCall;
  ImportProof(argument: _tarorpc_ImportProofRequest, callback: grpc.requestCallback<_tarorpc_ImportProofResponse__Output>): grpc.ClientUnaryCall;
  importProof(argument: _tarorpc_ImportProofRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ImportProofResponse__Output>): grpc.ClientUnaryCall;
  importProof(argument: _tarorpc_ImportProofRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ImportProofResponse__Output>): grpc.ClientUnaryCall;
  importProof(argument: _tarorpc_ImportProofRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ImportProofResponse__Output>): grpc.ClientUnaryCall;
  importProof(argument: _tarorpc_ImportProofRequest, callback: grpc.requestCallback<_tarorpc_ImportProofResponse__Output>): grpc.ClientUnaryCall;
  
  ListAssets(argument: _tarorpc_ListAssetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListAssetResponse__Output>): grpc.ClientUnaryCall;
  ListAssets(argument: _tarorpc_ListAssetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListAssetResponse__Output>): grpc.ClientUnaryCall;
  ListAssets(argument: _tarorpc_ListAssetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListAssetResponse__Output>): grpc.ClientUnaryCall;
  ListAssets(argument: _tarorpc_ListAssetRequest, callback: grpc.requestCallback<_tarorpc_ListAssetResponse__Output>): grpc.ClientUnaryCall;
  listAssets(argument: _tarorpc_ListAssetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListAssetResponse__Output>): grpc.ClientUnaryCall;
  listAssets(argument: _tarorpc_ListAssetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListAssetResponse__Output>): grpc.ClientUnaryCall;
  listAssets(argument: _tarorpc_ListAssetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListAssetResponse__Output>): grpc.ClientUnaryCall;
  listAssets(argument: _tarorpc_ListAssetRequest, callback: grpc.requestCallback<_tarorpc_ListAssetResponse__Output>): grpc.ClientUnaryCall;
  
  ListBalances(argument: _tarorpc_ListBalancesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse__Output>): grpc.ClientUnaryCall;
  ListBalances(argument: _tarorpc_ListBalancesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse__Output>): grpc.ClientUnaryCall;
  ListBalances(argument: _tarorpc_ListBalancesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse__Output>): grpc.ClientUnaryCall;
  ListBalances(argument: _tarorpc_ListBalancesRequest, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse__Output>): grpc.ClientUnaryCall;
  listBalances(argument: _tarorpc_ListBalancesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse__Output>): grpc.ClientUnaryCall;
  listBalances(argument: _tarorpc_ListBalancesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse__Output>): grpc.ClientUnaryCall;
  listBalances(argument: _tarorpc_ListBalancesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse__Output>): grpc.ClientUnaryCall;
  listBalances(argument: _tarorpc_ListBalancesRequest, callback: grpc.requestCallback<_tarorpc_ListBalancesResponse__Output>): grpc.ClientUnaryCall;
  
  ListGroups(argument: _tarorpc_ListGroupsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse__Output>): grpc.ClientUnaryCall;
  ListGroups(argument: _tarorpc_ListGroupsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse__Output>): grpc.ClientUnaryCall;
  ListGroups(argument: _tarorpc_ListGroupsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse__Output>): grpc.ClientUnaryCall;
  ListGroups(argument: _tarorpc_ListGroupsRequest, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse__Output>): grpc.ClientUnaryCall;
  listGroups(argument: _tarorpc_ListGroupsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse__Output>): grpc.ClientUnaryCall;
  listGroups(argument: _tarorpc_ListGroupsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse__Output>): grpc.ClientUnaryCall;
  listGroups(argument: _tarorpc_ListGroupsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse__Output>): grpc.ClientUnaryCall;
  listGroups(argument: _tarorpc_ListGroupsRequest, callback: grpc.requestCallback<_tarorpc_ListGroupsResponse__Output>): grpc.ClientUnaryCall;
  
  ListTransfers(argument: _tarorpc_ListTransfersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse__Output>): grpc.ClientUnaryCall;
  ListTransfers(argument: _tarorpc_ListTransfersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse__Output>): grpc.ClientUnaryCall;
  ListTransfers(argument: _tarorpc_ListTransfersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse__Output>): grpc.ClientUnaryCall;
  ListTransfers(argument: _tarorpc_ListTransfersRequest, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse__Output>): grpc.ClientUnaryCall;
  listTransfers(argument: _tarorpc_ListTransfersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse__Output>): grpc.ClientUnaryCall;
  listTransfers(argument: _tarorpc_ListTransfersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse__Output>): grpc.ClientUnaryCall;
  listTransfers(argument: _tarorpc_ListTransfersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse__Output>): grpc.ClientUnaryCall;
  listTransfers(argument: _tarorpc_ListTransfersRequest, callback: grpc.requestCallback<_tarorpc_ListTransfersResponse__Output>): grpc.ClientUnaryCall;
  
  ListUtxos(argument: _tarorpc_ListUtxosRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse__Output>): grpc.ClientUnaryCall;
  ListUtxos(argument: _tarorpc_ListUtxosRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse__Output>): grpc.ClientUnaryCall;
  ListUtxos(argument: _tarorpc_ListUtxosRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse__Output>): grpc.ClientUnaryCall;
  ListUtxos(argument: _tarorpc_ListUtxosRequest, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse__Output>): grpc.ClientUnaryCall;
  listUtxos(argument: _tarorpc_ListUtxosRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse__Output>): grpc.ClientUnaryCall;
  listUtxos(argument: _tarorpc_ListUtxosRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse__Output>): grpc.ClientUnaryCall;
  listUtxos(argument: _tarorpc_ListUtxosRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse__Output>): grpc.ClientUnaryCall;
  listUtxos(argument: _tarorpc_ListUtxosRequest, callback: grpc.requestCallback<_tarorpc_ListUtxosResponse__Output>): grpc.ClientUnaryCall;
  
  MintAsset(argument: _tarorpc_MintAssetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_MintAssetResponse__Output>): grpc.ClientUnaryCall;
  MintAsset(argument: _tarorpc_MintAssetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_MintAssetResponse__Output>): grpc.ClientUnaryCall;
  MintAsset(argument: _tarorpc_MintAssetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_MintAssetResponse__Output>): grpc.ClientUnaryCall;
  MintAsset(argument: _tarorpc_MintAssetRequest, callback: grpc.requestCallback<_tarorpc_MintAssetResponse__Output>): grpc.ClientUnaryCall;
  mintAsset(argument: _tarorpc_MintAssetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_MintAssetResponse__Output>): grpc.ClientUnaryCall;
  mintAsset(argument: _tarorpc_MintAssetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_MintAssetResponse__Output>): grpc.ClientUnaryCall;
  mintAsset(argument: _tarorpc_MintAssetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_MintAssetResponse__Output>): grpc.ClientUnaryCall;
  mintAsset(argument: _tarorpc_MintAssetRequest, callback: grpc.requestCallback<_tarorpc_MintAssetResponse__Output>): grpc.ClientUnaryCall;
  
  NewAddr(argument: _tarorpc_NewAddrRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  NewAddr(argument: _tarorpc_NewAddrRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  NewAddr(argument: _tarorpc_NewAddrRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  NewAddr(argument: _tarorpc_NewAddrRequest, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  newAddr(argument: _tarorpc_NewAddrRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  newAddr(argument: _tarorpc_NewAddrRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  newAddr(argument: _tarorpc_NewAddrRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  newAddr(argument: _tarorpc_NewAddrRequest, callback: grpc.requestCallback<_tarorpc_Addr__Output>): grpc.ClientUnaryCall;
  
  QueryAddrs(argument: _tarorpc_QueryAddrRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse__Output>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _tarorpc_QueryAddrRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse__Output>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _tarorpc_QueryAddrRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse__Output>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _tarorpc_QueryAddrRequest, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse__Output>): grpc.ClientUnaryCall;
  queryAddrs(argument: _tarorpc_QueryAddrRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse__Output>): grpc.ClientUnaryCall;
  queryAddrs(argument: _tarorpc_QueryAddrRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse__Output>): grpc.ClientUnaryCall;
  queryAddrs(argument: _tarorpc_QueryAddrRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse__Output>): grpc.ClientUnaryCall;
  queryAddrs(argument: _tarorpc_QueryAddrRequest, callback: grpc.requestCallback<_tarorpc_QueryAddrResponse__Output>): grpc.ClientUnaryCall;
  
  SendAsset(argument: _tarorpc_SendAssetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_SendAssetResponse__Output>): grpc.ClientUnaryCall;
  SendAsset(argument: _tarorpc_SendAssetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_SendAssetResponse__Output>): grpc.ClientUnaryCall;
  SendAsset(argument: _tarorpc_SendAssetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_SendAssetResponse__Output>): grpc.ClientUnaryCall;
  SendAsset(argument: _tarorpc_SendAssetRequest, callback: grpc.requestCallback<_tarorpc_SendAssetResponse__Output>): grpc.ClientUnaryCall;
  sendAsset(argument: _tarorpc_SendAssetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_SendAssetResponse__Output>): grpc.ClientUnaryCall;
  sendAsset(argument: _tarorpc_SendAssetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_SendAssetResponse__Output>): grpc.ClientUnaryCall;
  sendAsset(argument: _tarorpc_SendAssetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_SendAssetResponse__Output>): grpc.ClientUnaryCall;
  sendAsset(argument: _tarorpc_SendAssetRequest, callback: grpc.requestCallback<_tarorpc_SendAssetResponse__Output>): grpc.ClientUnaryCall;
  
  StopDaemon(argument: _tarorpc_StopRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_StopResponse__Output>): grpc.ClientUnaryCall;
  StopDaemon(argument: _tarorpc_StopRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_StopResponse__Output>): grpc.ClientUnaryCall;
  StopDaemon(argument: _tarorpc_StopRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_StopResponse__Output>): grpc.ClientUnaryCall;
  StopDaemon(argument: _tarorpc_StopRequest, callback: grpc.requestCallback<_tarorpc_StopResponse__Output>): grpc.ClientUnaryCall;
  stopDaemon(argument: _tarorpc_StopRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_StopResponse__Output>): grpc.ClientUnaryCall;
  stopDaemon(argument: _tarorpc_StopRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_StopResponse__Output>): grpc.ClientUnaryCall;
  stopDaemon(argument: _tarorpc_StopRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_StopResponse__Output>): grpc.ClientUnaryCall;
  stopDaemon(argument: _tarorpc_StopRequest, callback: grpc.requestCallback<_tarorpc_StopResponse__Output>): grpc.ClientUnaryCall;
  
  VerifyProof(argument: _tarorpc_ProofFile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse__Output>): grpc.ClientUnaryCall;
  VerifyProof(argument: _tarorpc_ProofFile, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse__Output>): grpc.ClientUnaryCall;
  VerifyProof(argument: _tarorpc_ProofFile, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse__Output>): grpc.ClientUnaryCall;
  VerifyProof(argument: _tarorpc_ProofFile, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse__Output>): grpc.ClientUnaryCall;
  verifyProof(argument: _tarorpc_ProofFile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse__Output>): grpc.ClientUnaryCall;
  verifyProof(argument: _tarorpc_ProofFile, metadata: grpc.Metadata, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse__Output>): grpc.ClientUnaryCall;
  verifyProof(argument: _tarorpc_ProofFile, options: grpc.CallOptions, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse__Output>): grpc.ClientUnaryCall;
  verifyProof(argument: _tarorpc_ProofFile, callback: grpc.requestCallback<_tarorpc_ProofVerifyResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TaroHandlers extends grpc.UntypedServiceImplementation {
  AddrReceives: grpc.handleUnaryCall<_tarorpc_AddrReceivesRequest__Output, _tarorpc_AddrReceivesResponse>;
  
  DebugLevel: grpc.handleUnaryCall<_tarorpc_DebugLevelRequest__Output, _tarorpc_DebugLevelResponse>;
  
  DecodeAddr: grpc.handleUnaryCall<_tarorpc_DecodeAddrRequest__Output, _tarorpc_Addr>;
  
  ExportProof: grpc.handleUnaryCall<_tarorpc_ExportProofRequest__Output, _tarorpc_ProofFile>;
  
  ImportProof: grpc.handleUnaryCall<_tarorpc_ImportProofRequest__Output, _tarorpc_ImportProofResponse>;
  
  ListAssets: grpc.handleUnaryCall<_tarorpc_ListAssetRequest__Output, _tarorpc_ListAssetResponse>;
  
  ListBalances: grpc.handleUnaryCall<_tarorpc_ListBalancesRequest__Output, _tarorpc_ListBalancesResponse>;
  
  ListGroups: grpc.handleUnaryCall<_tarorpc_ListGroupsRequest__Output, _tarorpc_ListGroupsResponse>;
  
  ListTransfers: grpc.handleUnaryCall<_tarorpc_ListTransfersRequest__Output, _tarorpc_ListTransfersResponse>;
  
  ListUtxos: grpc.handleUnaryCall<_tarorpc_ListUtxosRequest__Output, _tarorpc_ListUtxosResponse>;
  
  MintAsset: grpc.handleUnaryCall<_tarorpc_MintAssetRequest__Output, _tarorpc_MintAssetResponse>;
  
  NewAddr: grpc.handleUnaryCall<_tarorpc_NewAddrRequest__Output, _tarorpc_Addr>;
  
  QueryAddrs: grpc.handleUnaryCall<_tarorpc_QueryAddrRequest__Output, _tarorpc_QueryAddrResponse>;
  
  SendAsset: grpc.handleUnaryCall<_tarorpc_SendAssetRequest__Output, _tarorpc_SendAssetResponse>;
  
  StopDaemon: grpc.handleUnaryCall<_tarorpc_StopRequest__Output, _tarorpc_StopResponse>;
  
  VerifyProof: grpc.handleUnaryCall<_tarorpc_ProofFile__Output, _tarorpc_ProofVerifyResponse>;
  
}

export interface TaroDefinition extends grpc.ServiceDefinition {
  AddrReceives: MethodDefinition<_tarorpc_AddrReceivesRequest, _tarorpc_AddrReceivesResponse, _tarorpc_AddrReceivesRequest__Output, _tarorpc_AddrReceivesResponse__Output>
  DebugLevel: MethodDefinition<_tarorpc_DebugLevelRequest, _tarorpc_DebugLevelResponse, _tarorpc_DebugLevelRequest__Output, _tarorpc_DebugLevelResponse__Output>
  DecodeAddr: MethodDefinition<_tarorpc_DecodeAddrRequest, _tarorpc_Addr, _tarorpc_DecodeAddrRequest__Output, _tarorpc_Addr__Output>
  ExportProof: MethodDefinition<_tarorpc_ExportProofRequest, _tarorpc_ProofFile, _tarorpc_ExportProofRequest__Output, _tarorpc_ProofFile__Output>
  ImportProof: MethodDefinition<_tarorpc_ImportProofRequest, _tarorpc_ImportProofResponse, _tarorpc_ImportProofRequest__Output, _tarorpc_ImportProofResponse__Output>
  ListAssets: MethodDefinition<_tarorpc_ListAssetRequest, _tarorpc_ListAssetResponse, _tarorpc_ListAssetRequest__Output, _tarorpc_ListAssetResponse__Output>
  ListBalances: MethodDefinition<_tarorpc_ListBalancesRequest, _tarorpc_ListBalancesResponse, _tarorpc_ListBalancesRequest__Output, _tarorpc_ListBalancesResponse__Output>
  ListGroups: MethodDefinition<_tarorpc_ListGroupsRequest, _tarorpc_ListGroupsResponse, _tarorpc_ListGroupsRequest__Output, _tarorpc_ListGroupsResponse__Output>
  ListTransfers: MethodDefinition<_tarorpc_ListTransfersRequest, _tarorpc_ListTransfersResponse, _tarorpc_ListTransfersRequest__Output, _tarorpc_ListTransfersResponse__Output>
  ListUtxos: MethodDefinition<_tarorpc_ListUtxosRequest, _tarorpc_ListUtxosResponse, _tarorpc_ListUtxosRequest__Output, _tarorpc_ListUtxosResponse__Output>
  MintAsset: MethodDefinition<_tarorpc_MintAssetRequest, _tarorpc_MintAssetResponse, _tarorpc_MintAssetRequest__Output, _tarorpc_MintAssetResponse__Output>
  NewAddr: MethodDefinition<_tarorpc_NewAddrRequest, _tarorpc_Addr, _tarorpc_NewAddrRequest__Output, _tarorpc_Addr__Output>
  QueryAddrs: MethodDefinition<_tarorpc_QueryAddrRequest, _tarorpc_QueryAddrResponse, _tarorpc_QueryAddrRequest__Output, _tarorpc_QueryAddrResponse__Output>
  SendAsset: MethodDefinition<_tarorpc_SendAssetRequest, _tarorpc_SendAssetResponse, _tarorpc_SendAssetRequest__Output, _tarorpc_SendAssetResponse__Output>
  StopDaemon: MethodDefinition<_tarorpc_StopRequest, _tarorpc_StopResponse, _tarorpc_StopRequest__Output, _tarorpc_StopResponse__Output>
  VerifyProof: MethodDefinition<_tarorpc_ProofFile, _tarorpc_ProofVerifyResponse, _tarorpc_ProofFile__Output, _tarorpc_ProofVerifyResponse__Output>
}
