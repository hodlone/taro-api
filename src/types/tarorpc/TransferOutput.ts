// Original file: protos/taro.proto

import type { TransferOutputAnchorPartial as _tarorpc_TransferOutputAnchorPartial, TransferOutputAnchor as _tarorpc_TransferOutputAnchor } from '../tarorpc/TransferOutputAnchor';
import type { Long } from '@grpc/proto-loader';

export interface TransferOutputPartial {
  'anchor'?: (_tarorpc_TransferOutputAnchorPartial | null);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'scriptKeyIsLocal'?: (boolean);
  'amount'?: (number | string | Long);
  'newProofBlob'?: (Buffer | Uint8Array | string);
  'splitCommitRootHash'?: (Buffer | Uint8Array | string);
}

export interface TransferOutput {
  'anchor': (_tarorpc_TransferOutputAnchor | null);
  'scriptKey': (Buffer);
  'scriptKeyIsLocal': (boolean);
  'amount': (string);
  'newProofBlob': (Buffer);
  'splitCommitRootHash': (Buffer);
}
