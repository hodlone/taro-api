// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface PrevInputAsset {
  'anchorPoint'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
}

export interface PrevInputAsset__Output {
  'anchorPoint': (string);
  'assetId': (Buffer);
  'scriptKey': (Buffer);
  'amount': (string);
}
