// Original file: protos/mint.proto

import type { AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { AssetMetaPartial as _taprpc_AssetMetaPartial, AssetMeta as _taprpc_AssetMeta } from '../taprpc/AssetMeta';
import type { Long } from '@grpc/proto-loader';

export interface MintAssetPartial {
  'assetType'?: (_taprpc_AssetType | keyof typeof _taprpc_AssetType);
  'name'?: (string);
  'assetMeta'?: (_taprpc_AssetMetaPartial | null);
  'amount'?: (number | string | Long);
  'groupKey'?: (Buffer | Uint8Array | string);
  'groupAnchor'?: (string);
}

export interface MintAsset {
  'assetType': (keyof typeof _taprpc_AssetType);
  'name': (string);
  'assetMeta': (_taprpc_AssetMeta | null);
  'amount': (string);
  'groupKey': (Buffer);
  'groupAnchor': (string);
}
