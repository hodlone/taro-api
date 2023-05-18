// Original file: protos/universe.proto

import type { AssetTypeFilter as _universerpc_AssetTypeFilter } from '../universerpc/AssetTypeFilter';
import type { AssetQuerySort as _universerpc_AssetQuerySort } from '../universerpc/AssetQuerySort';

export interface AssetStatsQueryPartial {
  'assetNameFilter'?: (string);
  'assetIdFilter'?: (Buffer | Uint8Array | string);
  'assetTypeFilter'?: (_universerpc_AssetTypeFilter | keyof typeof _universerpc_AssetTypeFilter);
  'sortBy'?: (_universerpc_AssetQuerySort | keyof typeof _universerpc_AssetQuerySort);
  'offset'?: (number);
  'limit'?: (number);
}

export interface AssetStatsQuery {
  'assetNameFilter': (string);
  'assetIdFilter': (Buffer);
  'assetTypeFilter': (keyof typeof _universerpc_AssetTypeFilter);
  'sortBy': (keyof typeof _universerpc_AssetQuerySort);
  'offset': (number);
  'limit': (number);
}
