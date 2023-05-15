// Original file: protos/taprootassets.proto

import type { AssetTransferPartial as _taprpc_AssetTransferPartial, AssetTransfer as _taprpc_AssetTransfer } from '../taprpc/AssetTransfer';

export interface SendAssetResponsePartial {
  'transfer'?: (_taprpc_AssetTransferPartial | null);
}

export interface SendAssetResponse {
  'transfer': (_taprpc_AssetTransfer | null);
}
