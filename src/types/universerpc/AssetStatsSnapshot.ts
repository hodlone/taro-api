// Original file: protos/universe.proto

import type { AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface AssetStatsSnapshotPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'totalSupply'?: (number | string | Long);
  'assetName'?: (string);
  'assetType'?: (_taprpc_AssetType | keyof typeof _taprpc_AssetType);
  'genesisHeight'?: (number);
  'totalSyncs'?: (number | string | Long);
  'totalProofs'?: (number | string | Long);
}

export interface AssetStatsSnapshot {
  'assetId': (Buffer);
  'totalSupply': (string);
  'assetName': (string);
  'assetType': (keyof typeof _taprpc_AssetType);
  'genesisHeight': (number);
  'totalSyncs': (string);
  'totalProofs': (string);
}
