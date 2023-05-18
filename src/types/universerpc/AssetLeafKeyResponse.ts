// Original file: protos/universe.proto

import type { AssetKeyPartial as _universerpc_AssetKeyPartial, AssetKey as _universerpc_AssetKey } from '../universerpc/AssetKey';

export interface AssetLeafKeyResponsePartial {
  'assetKeys'?: (_universerpc_AssetKeyPartial)[];
}

export interface AssetLeafKeyResponse {
  'assetKeys': (_universerpc_AssetKey)[];
}
