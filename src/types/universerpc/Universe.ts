// Original file: protos/universe.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddFederationServerRequestPartial as _universerpc_AddFederationServerRequestPartial, AddFederationServerRequest as _universerpc_AddFederationServerRequest } from '../universerpc/AddFederationServerRequest';
import type { AddFederationServerResponsePartial as _universerpc_AddFederationServerResponsePartial, AddFederationServerResponse as _universerpc_AddFederationServerResponse } from '../universerpc/AddFederationServerResponse';
import type { AssetLeafKeyResponsePartial as _universerpc_AssetLeafKeyResponsePartial, AssetLeafKeyResponse as _universerpc_AssetLeafKeyResponse } from '../universerpc/AssetLeafKeyResponse';
import type { AssetLeafResponsePartial as _universerpc_AssetLeafResponsePartial, AssetLeafResponse as _universerpc_AssetLeafResponse } from '../universerpc/AssetLeafResponse';
import type { AssetRootQueryPartial as _universerpc_AssetRootQueryPartial, AssetRootQuery as _universerpc_AssetRootQuery } from '../universerpc/AssetRootQuery';
import type { AssetRootRequestPartial as _universerpc_AssetRootRequestPartial, AssetRootRequest as _universerpc_AssetRootRequest } from '../universerpc/AssetRootRequest';
import type { AssetRootResponsePartial as _universerpc_AssetRootResponsePartial, AssetRootResponse as _universerpc_AssetRootResponse } from '../universerpc/AssetRootResponse';
import type { DeleteFederationServerRequestPartial as _universerpc_DeleteFederationServerRequestPartial, DeleteFederationServerRequest as _universerpc_DeleteFederationServerRequest } from '../universerpc/DeleteFederationServerRequest';
import type { DeleteFederationServerResponsePartial as _universerpc_DeleteFederationServerResponsePartial, DeleteFederationServerResponse as _universerpc_DeleteFederationServerResponse } from '../universerpc/DeleteFederationServerResponse';
import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';
import type { IssuanceProofPartial as _universerpc_IssuanceProofPartial, IssuanceProof as _universerpc_IssuanceProof } from '../universerpc/IssuanceProof';
import type { IssuanceProofResponsePartial as _universerpc_IssuanceProofResponsePartial, IssuanceProofResponse as _universerpc_IssuanceProofResponse } from '../universerpc/IssuanceProofResponse';
import type { ListFederationServersRequestPartial as _universerpc_ListFederationServersRequestPartial, ListFederationServersRequest as _universerpc_ListFederationServersRequest } from '../universerpc/ListFederationServersRequest';
import type { ListFederationServersResponsePartial as _universerpc_ListFederationServersResponsePartial, ListFederationServersResponse as _universerpc_ListFederationServersResponse } from '../universerpc/ListFederationServersResponse';
import type { QueryRootResponsePartial as _universerpc_QueryRootResponsePartial, QueryRootResponse as _universerpc_QueryRootResponse } from '../universerpc/QueryRootResponse';
import type { SyncRequestPartial as _universerpc_SyncRequestPartial, SyncRequest as _universerpc_SyncRequest } from '../universerpc/SyncRequest';
import type { SyncResponsePartial as _universerpc_SyncResponsePartial, SyncResponse as _universerpc_SyncResponse } from '../universerpc/SyncResponse';
import type { UniverseKeyPartial as _universerpc_UniverseKeyPartial, UniverseKey as _universerpc_UniverseKey } from '../universerpc/UniverseKey';

export interface UniverseClient extends grpc.Client {
  AddFederationServer(argument: _universerpc_AddFederationServerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  AddFederationServer(argument: _universerpc_AddFederationServerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  AddFederationServer(argument: _universerpc_AddFederationServerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  AddFederationServer(argument: _universerpc_AddFederationServerRequestPartial, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  addFederationServer(argument: _universerpc_AddFederationServerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  addFederationServer(argument: _universerpc_AddFederationServerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  addFederationServer(argument: _universerpc_AddFederationServerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  addFederationServer(argument: _universerpc_AddFederationServerRequestPartial, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  
  AssetLeafKeys(argument: _universerpc_IDPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  AssetLeafKeys(argument: _universerpc_IDPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  AssetLeafKeys(argument: _universerpc_IDPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  AssetLeafKeys(argument: _universerpc_IDPartial, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  assetLeafKeys(argument: _universerpc_IDPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  assetLeafKeys(argument: _universerpc_IDPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  assetLeafKeys(argument: _universerpc_IDPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  assetLeafKeys(argument: _universerpc_IDPartial, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  
  AssetLeaves(argument: _universerpc_IDPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  AssetLeaves(argument: _universerpc_IDPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  AssetLeaves(argument: _universerpc_IDPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  AssetLeaves(argument: _universerpc_IDPartial, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  assetLeaves(argument: _universerpc_IDPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  assetLeaves(argument: _universerpc_IDPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  assetLeaves(argument: _universerpc_IDPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  assetLeaves(argument: _universerpc_IDPartial, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  
  AssetRoots(argument: _universerpc_AssetRootRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  AssetRoots(argument: _universerpc_AssetRootRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  AssetRoots(argument: _universerpc_AssetRootRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  AssetRoots(argument: _universerpc_AssetRootRequestPartial, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  assetRoots(argument: _universerpc_AssetRootRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  assetRoots(argument: _universerpc_AssetRootRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  assetRoots(argument: _universerpc_AssetRootRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  assetRoots(argument: _universerpc_AssetRootRequestPartial, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  
  DeleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  DeleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  DeleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  DeleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  deleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  deleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  deleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  deleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  
  InsertIssuanceProof(argument: _universerpc_IssuanceProofPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  InsertIssuanceProof(argument: _universerpc_IssuanceProofPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  InsertIssuanceProof(argument: _universerpc_IssuanceProofPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  InsertIssuanceProof(argument: _universerpc_IssuanceProofPartial, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  insertIssuanceProof(argument: _universerpc_IssuanceProofPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  insertIssuanceProof(argument: _universerpc_IssuanceProofPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  insertIssuanceProof(argument: _universerpc_IssuanceProofPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  insertIssuanceProof(argument: _universerpc_IssuanceProofPartial, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  
  ListFederationServers(argument: _universerpc_ListFederationServersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  ListFederationServers(argument: _universerpc_ListFederationServersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  ListFederationServers(argument: _universerpc_ListFederationServersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  ListFederationServers(argument: _universerpc_ListFederationServersRequestPartial, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  listFederationServers(argument: _universerpc_ListFederationServersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  listFederationServers(argument: _universerpc_ListFederationServersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  listFederationServers(argument: _universerpc_ListFederationServersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  listFederationServers(argument: _universerpc_ListFederationServersRequestPartial, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  
  QueryAssetRoots(argument: _universerpc_AssetRootQueryPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  QueryAssetRoots(argument: _universerpc_AssetRootQueryPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  QueryAssetRoots(argument: _universerpc_AssetRootQueryPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  QueryAssetRoots(argument: _universerpc_AssetRootQueryPartial, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  queryAssetRoots(argument: _universerpc_AssetRootQueryPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  queryAssetRoots(argument: _universerpc_AssetRootQueryPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  queryAssetRoots(argument: _universerpc_AssetRootQueryPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  queryAssetRoots(argument: _universerpc_AssetRootQueryPartial, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  
  QueryIssuanceProof(argument: _universerpc_UniverseKeyPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  QueryIssuanceProof(argument: _universerpc_UniverseKeyPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  QueryIssuanceProof(argument: _universerpc_UniverseKeyPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  QueryIssuanceProof(argument: _universerpc_UniverseKeyPartial, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  queryIssuanceProof(argument: _universerpc_UniverseKeyPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  queryIssuanceProof(argument: _universerpc_UniverseKeyPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  queryIssuanceProof(argument: _universerpc_UniverseKeyPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  queryIssuanceProof(argument: _universerpc_UniverseKeyPartial, callback: grpc.requestCallback<_universerpc_IssuanceProofResponse>): grpc.ClientUnaryCall;
  
  SyncUniverse(argument: _universerpc_SyncRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  SyncUniverse(argument: _universerpc_SyncRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  SyncUniverse(argument: _universerpc_SyncRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  SyncUniverse(argument: _universerpc_SyncRequestPartial, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  syncUniverse(argument: _universerpc_SyncRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  syncUniverse(argument: _universerpc_SyncRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  syncUniverse(argument: _universerpc_SyncRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  syncUniverse(argument: _universerpc_SyncRequestPartial, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  
}

export interface UniverseHandlers extends grpc.UntypedServiceImplementation {
  AddFederationServer: grpc.handleUnaryCall<_universerpc_AddFederationServerRequest, _universerpc_AddFederationServerResponsePartial>;
  
  AssetLeafKeys: grpc.handleUnaryCall<_universerpc_ID, _universerpc_AssetLeafKeyResponsePartial>;
  
  AssetLeaves: grpc.handleUnaryCall<_universerpc_ID, _universerpc_AssetLeafResponsePartial>;
  
  AssetRoots: grpc.handleUnaryCall<_universerpc_AssetRootRequest, _universerpc_AssetRootResponsePartial>;
  
  DeleteFederationServer: grpc.handleUnaryCall<_universerpc_DeleteFederationServerRequest, _universerpc_DeleteFederationServerResponsePartial>;
  
  InsertIssuanceProof: grpc.handleUnaryCall<_universerpc_IssuanceProof, _universerpc_IssuanceProofResponsePartial>;
  
  ListFederationServers: grpc.handleUnaryCall<_universerpc_ListFederationServersRequest, _universerpc_ListFederationServersResponsePartial>;
  
  QueryAssetRoots: grpc.handleUnaryCall<_universerpc_AssetRootQuery, _universerpc_QueryRootResponsePartial>;
  
  QueryIssuanceProof: grpc.handleUnaryCall<_universerpc_UniverseKey, _universerpc_IssuanceProofResponsePartial>;
  
  SyncUniverse: grpc.handleUnaryCall<_universerpc_SyncRequest, _universerpc_SyncResponsePartial>;
  
}

export interface UniverseDefinition extends grpc.ServiceDefinition {
  AddFederationServer: MethodDefinition<_universerpc_AddFederationServerRequestPartial, _universerpc_AddFederationServerResponsePartial, _universerpc_AddFederationServerRequest, _universerpc_AddFederationServerResponse>
  AssetLeafKeys: MethodDefinition<_universerpc_IDPartial, _universerpc_AssetLeafKeyResponsePartial, _universerpc_ID, _universerpc_AssetLeafKeyResponse>
  AssetLeaves: MethodDefinition<_universerpc_IDPartial, _universerpc_AssetLeafResponsePartial, _universerpc_ID, _universerpc_AssetLeafResponse>
  AssetRoots: MethodDefinition<_universerpc_AssetRootRequestPartial, _universerpc_AssetRootResponsePartial, _universerpc_AssetRootRequest, _universerpc_AssetRootResponse>
  DeleteFederationServer: MethodDefinition<_universerpc_DeleteFederationServerRequestPartial, _universerpc_DeleteFederationServerResponsePartial, _universerpc_DeleteFederationServerRequest, _universerpc_DeleteFederationServerResponse>
  InsertIssuanceProof: MethodDefinition<_universerpc_IssuanceProofPartial, _universerpc_IssuanceProofResponsePartial, _universerpc_IssuanceProof, _universerpc_IssuanceProofResponse>
  ListFederationServers: MethodDefinition<_universerpc_ListFederationServersRequestPartial, _universerpc_ListFederationServersResponsePartial, _universerpc_ListFederationServersRequest, _universerpc_ListFederationServersResponse>
  QueryAssetRoots: MethodDefinition<_universerpc_AssetRootQueryPartial, _universerpc_QueryRootResponsePartial, _universerpc_AssetRootQuery, _universerpc_QueryRootResponse>
  QueryIssuanceProof: MethodDefinition<_universerpc_UniverseKeyPartial, _universerpc_IssuanceProofResponsePartial, _universerpc_UniverseKey, _universerpc_IssuanceProofResponse>
  SyncUniverse: MethodDefinition<_universerpc_SyncRequestPartial, _universerpc_SyncResponsePartial, _universerpc_SyncRequest, _universerpc_SyncResponse>
}
