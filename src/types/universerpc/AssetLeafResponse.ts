// Original file: protos/universe.proto

import type { AssetLeafPartial as _universerpc_AssetLeafPartial, AssetLeaf as _universerpc_AssetLeaf } from '../universerpc/AssetLeaf';

export interface AssetLeafResponsePartial {
  'leaves'?: (_universerpc_AssetLeafPartial)[];
}

export interface AssetLeafResponse {
  'leaves': (_universerpc_AssetLeaf)[];
}
