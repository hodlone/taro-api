// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetGroupBalancePartial {
  'groupKey'?: (Buffer | Uint8Array | string);
  'balance'?: (number | string | Long);
}

export interface AssetGroupBalance {
  'groupKey': (Buffer);
  'balance': (string);
}
