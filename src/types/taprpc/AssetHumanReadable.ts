// Original file: protos/taprootassets.proto

import type { AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface AssetHumanReadablePartial {
  'id'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'lockTime'?: (number);
  'relativeLockTime'?: (number);
  'tag'?: (string);
  'metaHash'?: (Buffer | Uint8Array | string);
  'type'?: (_taprpc_AssetType | keyof typeof _taprpc_AssetType);
}

export interface AssetHumanReadable {
  'id': (Buffer);
  'amount': (string);
  'lockTime': (number);
  'relativeLockTime': (number);
  'tag': (string);
  'metaHash': (Buffer);
  'type': (keyof typeof _taprpc_AssetType);
}
