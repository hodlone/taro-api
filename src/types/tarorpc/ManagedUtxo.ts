// Original file: protos/taro.proto

import type { AssetPartial as _tarorpc_AssetPartial, Asset as _tarorpc_Asset } from '../tarorpc/Asset';
import type { Long } from '@grpc/proto-loader';

export interface ManagedUtxoPartial {
  'outPoint'?: (string);
  'amtSat'?: (number | string | Long);
  'internalKey'?: (Buffer | Uint8Array | string);
  'taroRoot'?: (Buffer | Uint8Array | string);
  'merkleRoot'?: (Buffer | Uint8Array | string);
  'assets'?: (_tarorpc_AssetPartial)[];
}

export interface ManagedUtxo {
  'outPoint': (string);
  'amtSat': (string);
  'internalKey': (Buffer);
  'taroRoot': (Buffer);
  'merkleRoot': (Buffer);
  'assets': (_tarorpc_Asset)[];
}
