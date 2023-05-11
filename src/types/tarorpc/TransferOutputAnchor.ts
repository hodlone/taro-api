// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface TransferOutputAnchorPartial {
  'outpoint'?: (string);
  'value'?: (number | string | Long);
  'internalKey'?: (Buffer | Uint8Array | string);
  'taroRoot'?: (Buffer | Uint8Array | string);
  'merkleRoot'?: (Buffer | Uint8Array | string);
  'tapscriptSibling'?: (Buffer | Uint8Array | string);
  'numPassiveAssets'?: (number);
}

export interface TransferOutputAnchor {
  'outpoint': (string);
  'value': (string);
  'internalKey': (Buffer);
  'taroRoot': (Buffer);
  'merkleRoot': (Buffer);
  'tapscriptSibling': (Buffer);
  'numPassiveAssets': (number);
}