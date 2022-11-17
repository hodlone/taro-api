// Original file: protos/taro.proto

import type { AssetSpendDelta as _tarorpc_AssetSpendDelta, AssetSpendDelta__Output as _tarorpc_AssetSpendDelta__Output } from '../tarorpc/AssetSpendDelta';
import type { Long } from '@grpc/proto-loader';

export interface AssetTransfer {
  'transferTimestamp'?: (number | string | Long);
  'oldAnchorPoint'?: (string);
  'newAnchorPoint'?: (string);
  'taroRoot'?: (Buffer | Uint8Array | string);
  'anchorTxHash'?: (Buffer | Uint8Array | string);
  'assetSpendDeltas'?: (_tarorpc_AssetSpendDelta)[];
}

export interface AssetTransfer__Output {
  'transferTimestamp': (string);
  'oldAnchorPoint': (string);
  'newAnchorPoint': (string);
  'taroRoot': (Buffer);
  'anchorTxHash': (Buffer);
  'assetSpendDeltas': (_tarorpc_AssetSpendDelta__Output)[];
}
