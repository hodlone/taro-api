// Original file: protos/taprootassets.proto

import type { TransferInputPartial as _taprpc_TransferInputPartial, TransferInput as _taprpc_TransferInput } from '../taprpc/TransferInput';
import type { TransferOutputPartial as _taprpc_TransferOutputPartial, TransferOutput as _taprpc_TransferOutput } from '../taprpc/TransferOutput';
import type { Long } from '@grpc/proto-loader';

export interface AssetTransferPartial {
  'transferTimestamp'?: (number | string | Long);
  'anchorTxHash'?: (Buffer | Uint8Array | string);
  'anchorTxHeightHint'?: (number);
  'anchorTxChainFees'?: (number | string | Long);
  'inputs'?: (_taprpc_TransferInputPartial)[];
  'outputs'?: (_taprpc_TransferOutputPartial)[];
}

export interface AssetTransfer {
  'transferTimestamp': (string);
  'anchorTxHash': (Buffer);
  'anchorTxHeightHint': (number);
  'anchorTxChainFees': (string);
  'inputs': (_taprpc_TransferInput)[];
  'outputs': (_taprpc_TransferOutput)[];
}
