// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetGroupBalance {
  'groupKey'?: (Buffer | Uint8Array | string);
  'balance'?: (number | string | Long);
}

export interface AssetGroupBalance__Output {
  'groupKey': (Buffer);
  'balance': (string);
}
