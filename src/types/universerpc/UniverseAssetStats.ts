// Original file: protos/universe.proto

import type { AssetStatsSnapshotPartial as _universerpc_AssetStatsSnapshotPartial, AssetStatsSnapshot as _universerpc_AssetStatsSnapshot } from '../universerpc/AssetStatsSnapshot';

export interface UniverseAssetStatsPartial {
  'assetStats'?: (_universerpc_AssetStatsSnapshotPartial)[];
}

export interface UniverseAssetStats {
  'assetStats': (_universerpc_AssetStatsSnapshot)[];
}
