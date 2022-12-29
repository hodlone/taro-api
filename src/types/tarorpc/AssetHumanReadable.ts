// Original file: protos/taro.proto

import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface AssetHumanReadable {
  'id'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'lockTime'?: (number);
  'relativeLockTime'?: (number);
  'tag'?: (string);
  'metaData'?: (Buffer | Uint8Array | string);
  'type'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
}

export interface AssetHumanReadable__Output {
  'id': (Buffer);
  'amount': (string);
  'lockTime': (number);
  'relativeLockTime': (number);
  'tag': (string);
  'metaData': (Buffer);
  'type': (keyof typeof _tarorpc_AssetType);
}
