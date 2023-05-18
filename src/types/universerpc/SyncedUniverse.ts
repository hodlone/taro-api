// Original file: protos/universe.proto

import type { UniverseRootPartial as _universerpc_UniverseRootPartial, UniverseRoot as _universerpc_UniverseRoot } from '../universerpc/UniverseRoot';
import type { AssetLeafPartial as _universerpc_AssetLeafPartial, AssetLeaf as _universerpc_AssetLeaf } from '../universerpc/AssetLeaf';

export interface SyncedUniversePartial {
  'oldAssetRoot'?: (_universerpc_UniverseRootPartial | null);
  'newAssetRoot'?: (_universerpc_UniverseRootPartial | null);
  'newAssetLeaves'?: (_universerpc_AssetLeafPartial)[];
}

export interface SyncedUniverse {
  'oldAssetRoot': (_universerpc_UniverseRoot | null);
  'newAssetRoot': (_universerpc_UniverseRoot | null);
  'newAssetLeaves': (_universerpc_AssetLeaf)[];
}
