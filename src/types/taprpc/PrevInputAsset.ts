// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface PrevInputAssetPartial {
  'anchorPoint'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
}

export interface PrevInputAsset {
  'anchorPoint': (string);
  'assetId': (Buffer);
  'scriptKey': (Buffer);
  'amount': (string);
}
