// Original file: protos/universe.proto

import type { UniverseKeyPartial as _universerpc_UniverseKeyPartial, UniverseKey as _universerpc_UniverseKey } from '../universerpc/UniverseKey';
import type { AssetLeafPartial as _universerpc_AssetLeafPartial, AssetLeaf as _universerpc_AssetLeaf } from '../universerpc/AssetLeaf';

export interface AssetProofPartial {
  'key'?: (_universerpc_UniverseKeyPartial | null);
  'assetLeaf'?: (_universerpc_AssetLeafPartial | null);
}

export interface AssetProof {
  'key': (_universerpc_UniverseKey | null);
  'assetLeaf': (_universerpc_AssetLeaf | null);
}
