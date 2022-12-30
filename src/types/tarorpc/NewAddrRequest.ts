// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface NewAddrRequest {
  'genesisBootstrapInfo'?: (Buffer | Uint8Array | string);
  'groupKey'?: (Buffer | Uint8Array | string);
  'amt'?: (number | string | Long);
}

export interface NewAddrRequest__Output {
  'genesisBootstrapInfo': (Buffer);
  'groupKey': (Buffer);
  'amt': (string);
}
