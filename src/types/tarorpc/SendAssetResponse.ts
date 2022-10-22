// Original file: protos/taro.proto

import type { TaroTransfer as _tarorpc_TaroTransfer, TaroTransfer__Output as _tarorpc_TaroTransfer__Output } from '../tarorpc/TaroTransfer';
import type { Long } from '@grpc/proto-loader';

export interface SendAssetResponse {
  'transferTxid'?: (Buffer | Uint8Array | string);
  'anchorOutputIndex'?: (number);
  'transferTxBytes'?: (Buffer | Uint8Array | string);
  'taroTransfer'?: (_tarorpc_TaroTransfer | null);
  'totalFeeSats'?: (number | string | Long);
}

export interface SendAssetResponse__Output {
  'transferTxid': (Buffer);
  'anchorOutputIndex': (number);
  'transferTxBytes': (Buffer);
  'taroTransfer': (_tarorpc_TaroTransfer__Output | null);
  'totalFeeSats': (string);
}
