// Original file: protos/taro.proto

import type { Asset as _tarorpc_Asset, Asset__Output as _tarorpc_Asset__Output } from '../tarorpc/Asset';
import type { Long } from '@grpc/proto-loader';

export interface ManagedUtxo {
  'outPoint'?: (string);
  'amtSat'?: (number | string | Long);
  'internalKey'?: (Buffer | Uint8Array | string);
  'taroRoot'?: (Buffer | Uint8Array | string);
  'assets'?: (_tarorpc_Asset)[];
}

export interface ManagedUtxo__Output {
  'outPoint': (string);
  'amtSat': (string);
  'internalKey': (Buffer);
  'taroRoot': (Buffer);
  'assets': (_tarorpc_Asset__Output)[];
}
