// Original file: protos/taprootassets.proto

import type { AssetPartial as _taprpc_AssetPartial, Asset as _taprpc_Asset } from '../taprpc/Asset';

export interface ListAssetResponsePartial {
  'assets'?: (_taprpc_AssetPartial)[];
}

export interface ListAssetResponse {
  'assets': (_taprpc_Asset)[];
}
