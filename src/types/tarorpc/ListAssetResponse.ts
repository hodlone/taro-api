// Original file: protos/taro.proto

import type { AssetPartial as _tarorpc_AssetPartial, Asset as _tarorpc_Asset } from '../tarorpc/Asset';

export interface ListAssetResponsePartial {
  'assets'?: (_tarorpc_AssetPartial)[];
}

export interface ListAssetResponse {
  'assets': (_tarorpc_Asset)[];
}
