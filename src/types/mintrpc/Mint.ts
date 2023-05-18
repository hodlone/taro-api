// Original file: protos/mint.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CancelBatchRequestPartial as _mintrpc_CancelBatchRequestPartial, CancelBatchRequest as _mintrpc_CancelBatchRequest } from '../mintrpc/CancelBatchRequest';
import type { CancelBatchResponsePartial as _mintrpc_CancelBatchResponsePartial, CancelBatchResponse as _mintrpc_CancelBatchResponse } from '../mintrpc/CancelBatchResponse';
import type { FinalizeBatchRequestPartial as _mintrpc_FinalizeBatchRequestPartial, FinalizeBatchRequest as _mintrpc_FinalizeBatchRequest } from '../mintrpc/FinalizeBatchRequest';
import type { FinalizeBatchResponsePartial as _mintrpc_FinalizeBatchResponsePartial, FinalizeBatchResponse as _mintrpc_FinalizeBatchResponse } from '../mintrpc/FinalizeBatchResponse';
import type { ListBatchRequestPartial as _mintrpc_ListBatchRequestPartial, ListBatchRequest as _mintrpc_ListBatchRequest } from '../mintrpc/ListBatchRequest';
import type { ListBatchResponsePartial as _mintrpc_ListBatchResponsePartial, ListBatchResponse as _mintrpc_ListBatchResponse } from '../mintrpc/ListBatchResponse';
import type { MintAssetRequestPartial as _mintrpc_MintAssetRequestPartial, MintAssetRequest as _mintrpc_MintAssetRequest } from '../mintrpc/MintAssetRequest';
import type { MintAssetResponsePartial as _mintrpc_MintAssetResponsePartial, MintAssetResponse as _mintrpc_MintAssetResponse } from '../mintrpc/MintAssetResponse';

export interface MintClient extends grpc.Client {
  CancelBatch(argument: _mintrpc_CancelBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  CancelBatch(argument: _mintrpc_CancelBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  CancelBatch(argument: _mintrpc_CancelBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  CancelBatch(argument: _mintrpc_CancelBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  cancelBatch(argument: _mintrpc_CancelBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  cancelBatch(argument: _mintrpc_CancelBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  cancelBatch(argument: _mintrpc_CancelBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  cancelBatch(argument: _mintrpc_CancelBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  
  FinalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  FinalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  FinalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  FinalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  finalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  finalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  finalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  finalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  
  ListBatches(argument: _mintrpc_ListBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  ListBatches(argument: _mintrpc_ListBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  ListBatches(argument: _mintrpc_ListBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  ListBatches(argument: _mintrpc_ListBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  listBatches(argument: _mintrpc_ListBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  listBatches(argument: _mintrpc_ListBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  listBatches(argument: _mintrpc_ListBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  listBatches(argument: _mintrpc_ListBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  
  MintAsset(argument: _mintrpc_MintAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  MintAsset(argument: _mintrpc_MintAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  MintAsset(argument: _mintrpc_MintAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  MintAsset(argument: _mintrpc_MintAssetRequestPartial, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  mintAsset(argument: _mintrpc_MintAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  mintAsset(argument: _mintrpc_MintAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  mintAsset(argument: _mintrpc_MintAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  mintAsset(argument: _mintrpc_MintAssetRequestPartial, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  
}

export interface MintHandlers extends grpc.UntypedServiceImplementation {
  CancelBatch: grpc.handleUnaryCall<_mintrpc_CancelBatchRequest, _mintrpc_CancelBatchResponsePartial>;
  
  FinalizeBatch: grpc.handleUnaryCall<_mintrpc_FinalizeBatchRequest, _mintrpc_FinalizeBatchResponsePartial>;
  
  ListBatches: grpc.handleUnaryCall<_mintrpc_ListBatchRequest, _mintrpc_ListBatchResponsePartial>;
  
  MintAsset: grpc.handleUnaryCall<_mintrpc_MintAssetRequest, _mintrpc_MintAssetResponsePartial>;
  
}

export interface MintDefinition extends grpc.ServiceDefinition {
  CancelBatch: MethodDefinition<_mintrpc_CancelBatchRequestPartial, _mintrpc_CancelBatchResponsePartial, _mintrpc_CancelBatchRequest, _mintrpc_CancelBatchResponse>
  FinalizeBatch: MethodDefinition<_mintrpc_FinalizeBatchRequestPartial, _mintrpc_FinalizeBatchResponsePartial, _mintrpc_FinalizeBatchRequest, _mintrpc_FinalizeBatchResponse>
  ListBatches: MethodDefinition<_mintrpc_ListBatchRequestPartial, _mintrpc_ListBatchResponsePartial, _mintrpc_ListBatchRequest, _mintrpc_ListBatchResponse>
  MintAsset: MethodDefinition<_mintrpc_MintAssetRequestPartial, _mintrpc_MintAssetResponsePartial, _mintrpc_MintAssetRequest, _mintrpc_MintAssetResponse>
}
