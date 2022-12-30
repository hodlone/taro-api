// Original file: protos/taro.proto

import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface Addr {
  'encoded'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'assetType'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'amount'?: (number | string | Long);
  'groupKey'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'internalKey'?: (Buffer | Uint8Array | string);
  'taprootOutputKey'?: (Buffer | Uint8Array | string);
}

export interface Addr__Output {
  'encoded': (string);
  'assetId': (Buffer);
  'assetType': (keyof typeof _tarorpc_AssetType);
  'amount': (string);
  'groupKey': (Buffer);
  'scriptKey': (Buffer);
  'internalKey': (Buffer);
  'taprootOutputKey': (Buffer);
}
