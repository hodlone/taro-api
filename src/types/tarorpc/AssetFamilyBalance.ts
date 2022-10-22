// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetFamilyBalance {
  'familyKey'?: (Buffer | Uint8Array | string);
  'balance'?: (number | string | Long);
}

export interface AssetFamilyBalance__Output {
  'familyKey': (Buffer);
  'balance': (string);
}
