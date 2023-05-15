// Original file: protos/taprootassets.proto

import type { AssetHumanReadablePartial as _taprpc_AssetHumanReadablePartial, AssetHumanReadable as _taprpc_AssetHumanReadable } from '../taprpc/AssetHumanReadable';

export interface GroupedAssetsPartial {
  'assets'?: (_taprpc_AssetHumanReadablePartial)[];
}

export interface GroupedAssets {
  'assets': (_taprpc_AssetHumanReadable)[];
}
