// Original file: protos/assetwallet.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AnchorVirtualPsbtsRequestPartial as _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, AnchorVirtualPsbtsRequest as _assetwalletrpc_AnchorVirtualPsbtsRequest } from '../assetwalletrpc/AnchorVirtualPsbtsRequest';
import type { FundVirtualPsbtRequestPartial as _assetwalletrpc_FundVirtualPsbtRequestPartial, FundVirtualPsbtRequest as _assetwalletrpc_FundVirtualPsbtRequest } from '../assetwalletrpc/FundVirtualPsbtRequest';
import type { FundVirtualPsbtResponsePartial as _assetwalletrpc_FundVirtualPsbtResponsePartial, FundVirtualPsbtResponse as _assetwalletrpc_FundVirtualPsbtResponse } from '../assetwalletrpc/FundVirtualPsbtResponse';
import type { NextInternalKeyRequestPartial as _assetwalletrpc_NextInternalKeyRequestPartial, NextInternalKeyRequest as _assetwalletrpc_NextInternalKeyRequest } from '../assetwalletrpc/NextInternalKeyRequest';
import type { NextInternalKeyResponsePartial as _assetwalletrpc_NextInternalKeyResponsePartial, NextInternalKeyResponse as _assetwalletrpc_NextInternalKeyResponse } from '../assetwalletrpc/NextInternalKeyResponse';
import type { NextScriptKeyRequestPartial as _assetwalletrpc_NextScriptKeyRequestPartial, NextScriptKeyRequest as _assetwalletrpc_NextScriptKeyRequest } from '../assetwalletrpc/NextScriptKeyRequest';
import type { NextScriptKeyResponsePartial as _assetwalletrpc_NextScriptKeyResponsePartial, NextScriptKeyResponse as _assetwalletrpc_NextScriptKeyResponse } from '../assetwalletrpc/NextScriptKeyResponse';
import type { ProveAssetOwnershipRequestPartial as _assetwalletrpc_ProveAssetOwnershipRequestPartial, ProveAssetOwnershipRequest as _assetwalletrpc_ProveAssetOwnershipRequest } from '../assetwalletrpc/ProveAssetOwnershipRequest';
import type { ProveAssetOwnershipResponsePartial as _assetwalletrpc_ProveAssetOwnershipResponsePartial, ProveAssetOwnershipResponse as _assetwalletrpc_ProveAssetOwnershipResponse } from '../assetwalletrpc/ProveAssetOwnershipResponse';
import type { SendAssetResponsePartial as _taprpc_SendAssetResponsePartial, SendAssetResponse as _taprpc_SendAssetResponse } from '../taprpc/SendAssetResponse';
import type { SignVirtualPsbtRequestPartial as _assetwalletrpc_SignVirtualPsbtRequestPartial, SignVirtualPsbtRequest as _assetwalletrpc_SignVirtualPsbtRequest } from '../assetwalletrpc/SignVirtualPsbtRequest';
import type { SignVirtualPsbtResponsePartial as _assetwalletrpc_SignVirtualPsbtResponsePartial, SignVirtualPsbtResponse as _assetwalletrpc_SignVirtualPsbtResponse } from '../assetwalletrpc/SignVirtualPsbtResponse';
import type { VerifyAssetOwnershipRequestPartial as _assetwalletrpc_VerifyAssetOwnershipRequestPartial, VerifyAssetOwnershipRequest as _assetwalletrpc_VerifyAssetOwnershipRequest } from '../assetwalletrpc/VerifyAssetOwnershipRequest';
import type { VerifyAssetOwnershipResponsePartial as _assetwalletrpc_VerifyAssetOwnershipResponsePartial, VerifyAssetOwnershipResponse as _assetwalletrpc_VerifyAssetOwnershipResponse } from '../assetwalletrpc/VerifyAssetOwnershipResponse';

export interface AssetWalletClient extends grpc.Client {
  AnchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  AnchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  AnchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  AnchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  anchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  anchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  anchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  anchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  
  FundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  FundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  FundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  FundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  fundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  fundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  fundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  fundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  
  NextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  NextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  NextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  NextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  nextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  nextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  nextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  nextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  
  NextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  NextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  NextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  NextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  nextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  nextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  nextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  nextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  
  ProveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  ProveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  ProveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  ProveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  proveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  proveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  proveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  proveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  
  SignVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  SignVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  SignVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  SignVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  signVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  signVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  signVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  signVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  
  VerifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  VerifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  VerifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  VerifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  verifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  verifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  verifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  verifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  
}

export interface AssetWalletHandlers extends grpc.UntypedServiceImplementation {
  AnchorVirtualPsbts: grpc.handleUnaryCall<_assetwalletrpc_AnchorVirtualPsbtsRequest, _taprpc_SendAssetResponsePartial>;
  
  FundVirtualPsbt: grpc.handleUnaryCall<_assetwalletrpc_FundVirtualPsbtRequest, _assetwalletrpc_FundVirtualPsbtResponsePartial>;
  
  NextInternalKey: grpc.handleUnaryCall<_assetwalletrpc_NextInternalKeyRequest, _assetwalletrpc_NextInternalKeyResponsePartial>;
  
  NextScriptKey: grpc.handleUnaryCall<_assetwalletrpc_NextScriptKeyRequest, _assetwalletrpc_NextScriptKeyResponsePartial>;
  
  ProveAssetOwnership: grpc.handleUnaryCall<_assetwalletrpc_ProveAssetOwnershipRequest, _assetwalletrpc_ProveAssetOwnershipResponsePartial>;
  
  SignVirtualPsbt: grpc.handleUnaryCall<_assetwalletrpc_SignVirtualPsbtRequest, _assetwalletrpc_SignVirtualPsbtResponsePartial>;
  
  VerifyAssetOwnership: grpc.handleUnaryCall<_assetwalletrpc_VerifyAssetOwnershipRequest, _assetwalletrpc_VerifyAssetOwnershipResponsePartial>;
  
}

export interface AssetWalletDefinition extends grpc.ServiceDefinition {
  AnchorVirtualPsbts: MethodDefinition<_assetwalletrpc_AnchorVirtualPsbtsRequestPartial, _taprpc_SendAssetResponsePartial, _assetwalletrpc_AnchorVirtualPsbtsRequest, _taprpc_SendAssetResponse>
  FundVirtualPsbt: MethodDefinition<_assetwalletrpc_FundVirtualPsbtRequestPartial, _assetwalletrpc_FundVirtualPsbtResponsePartial, _assetwalletrpc_FundVirtualPsbtRequest, _assetwalletrpc_FundVirtualPsbtResponse>
  NextInternalKey: MethodDefinition<_assetwalletrpc_NextInternalKeyRequestPartial, _assetwalletrpc_NextInternalKeyResponsePartial, _assetwalletrpc_NextInternalKeyRequest, _assetwalletrpc_NextInternalKeyResponse>
  NextScriptKey: MethodDefinition<_assetwalletrpc_NextScriptKeyRequestPartial, _assetwalletrpc_NextScriptKeyResponsePartial, _assetwalletrpc_NextScriptKeyRequest, _assetwalletrpc_NextScriptKeyResponse>
  ProveAssetOwnership: MethodDefinition<_assetwalletrpc_ProveAssetOwnershipRequestPartial, _assetwalletrpc_ProveAssetOwnershipResponsePartial, _assetwalletrpc_ProveAssetOwnershipRequest, _assetwalletrpc_ProveAssetOwnershipResponse>
  SignVirtualPsbt: MethodDefinition<_assetwalletrpc_SignVirtualPsbtRequestPartial, _assetwalletrpc_SignVirtualPsbtResponsePartial, _assetwalletrpc_SignVirtualPsbtRequest, _assetwalletrpc_SignVirtualPsbtResponse>
  VerifyAssetOwnership: MethodDefinition<_assetwalletrpc_VerifyAssetOwnershipRequestPartial, _assetwalletrpc_VerifyAssetOwnershipResponsePartial, _assetwalletrpc_VerifyAssetOwnershipRequest, _assetwalletrpc_VerifyAssetOwnershipResponse>
}
