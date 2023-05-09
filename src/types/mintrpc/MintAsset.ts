// Original file: protos/mint.proto

import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { AssetMetaPartial as _tarorpc_AssetMetaPartial, AssetMeta as _tarorpc_AssetMeta } from '../tarorpc/AssetMeta';
import type { Long } from '@grpc/proto-loader';

export interface MintAssetPartial {
  'assetType'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'name'?: (string);
  'assetMeta'?: (_tarorpc_AssetMetaPartial | null);
  'amount'?: (number | string | Long);
  'groupKey'?: (Buffer | Uint8Array | string);
  'groupAnchor'?: (string);
}

export interface MintAsset {
  'assetType': (keyof typeof _tarorpc_AssetType);
  'name': (string);
  'assetMeta': (_tarorpc_AssetMeta | null);
  'amount': (string);
  'groupKey': (Buffer);
  'groupAnchor': (string);
}
