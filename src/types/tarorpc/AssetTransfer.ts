// Original file: protos/taro.proto

import type { TransferInputPartial as _tarorpc_TransferInputPartial, TransferInput as _tarorpc_TransferInput } from '../tarorpc/TransferInput';
import type { TransferOutputPartial as _tarorpc_TransferOutputPartial, TransferOutput as _tarorpc_TransferOutput } from '../tarorpc/TransferOutput';
import type { Long } from '@grpc/proto-loader';

export interface AssetTransferPartial {
  'transferTimestamp'?: (number | string | Long);
  'anchorTxHash'?: (Buffer | Uint8Array | string);
  'anchorTxHeightHint'?: (number);
  'anchorTxChainFees'?: (number | string | Long);
  'inputs'?: (_tarorpc_TransferInputPartial)[];
  'outputs'?: (_tarorpc_TransferOutputPartial)[];
}

export interface AssetTransfer {
  'transferTimestamp': (string);
  'anchorTxHash': (Buffer);
  'anchorTxHeightHint': (number);
  'anchorTxChainFees': (string);
  'inputs': (_tarorpc_TransferInput)[];
  'outputs': (_tarorpc_TransferOutput)[];
}
