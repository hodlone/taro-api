// Original file: protos/taro.proto

import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface MintAssetRequest {
  'assetType'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'name'?: (string);
  'metaData'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'enableEmission'?: (boolean);
  'skipBatch'?: (boolean);
}

export interface MintAssetRequest__Output {
  'assetType': (keyof typeof _tarorpc_AssetType);
  'name': (string);
  'metaData': (Buffer);
  'amount': (string);
  'enableEmission': (boolean);
  'skipBatch': (boolean);
}
