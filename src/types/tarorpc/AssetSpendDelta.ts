// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetSpendDelta {
  'assetId'?: (Buffer | Uint8Array | string);
  'oldScriptKey'?: (Buffer | Uint8Array | string);
  'newScriptKey'?: (Buffer | Uint8Array | string);
  'newAmt'?: (number | string | Long);
}

export interface AssetSpendDelta__Output {
  'assetId': (Buffer);
  'oldScriptKey': (Buffer);
  'newScriptKey': (Buffer);
  'newAmt': (string);
}
