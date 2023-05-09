// Original file: protos/taro.proto

import type { AssetTransferPartial as _tarorpc_AssetTransferPartial, AssetTransfer as _tarorpc_AssetTransfer } from '../tarorpc/AssetTransfer';

export interface SendAssetResponsePartial {
  'transfer'?: (_tarorpc_AssetTransferPartial | null);
}

export interface SendAssetResponse {
  'transfer': (_tarorpc_AssetTransfer | null);
}
