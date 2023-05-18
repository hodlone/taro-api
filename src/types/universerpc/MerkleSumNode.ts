// Original file: protos/universe.proto

import type { Long } from '@grpc/proto-loader';

export interface MerkleSumNodePartial {
  'rootHash'?: (Buffer | Uint8Array | string);
  'rootSum'?: (number | string | Long);
}

export interface MerkleSumNode {
  'rootHash': (Buffer);
  'rootSum': (string);
}
