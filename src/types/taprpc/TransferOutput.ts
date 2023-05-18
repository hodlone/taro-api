// Original file: protos/taprootassets.proto

import type { TransferOutputAnchorPartial as _taprpc_TransferOutputAnchorPartial, TransferOutputAnchor as _taprpc_TransferOutputAnchor } from '../taprpc/TransferOutputAnchor';
import type { OutputType as _taprpc_OutputType } from '../taprpc/OutputType';
import type { Long } from '@grpc/proto-loader';

export interface TransferOutputPartial {
  'anchor'?: (_taprpc_TransferOutputAnchorPartial | null);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'scriptKeyIsLocal'?: (boolean);
  'amount'?: (number | string | Long);
  'newProofBlob'?: (Buffer | Uint8Array | string);
  'splitCommitRootHash'?: (Buffer | Uint8Array | string);
  'outputType'?: (_taprpc_OutputType | keyof typeof _taprpc_OutputType);
}

export interface TransferOutput {
  'anchor': (_taprpc_TransferOutputAnchor | null);
  'scriptKey': (Buffer);
  'scriptKeyIsLocal': (boolean);
  'amount': (string);
  'newProofBlob': (Buffer);
  'splitCommitRootHash': (Buffer);
  'outputType': (keyof typeof _taprpc_OutputType);
}
