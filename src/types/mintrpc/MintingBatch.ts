// Original file: protos/mint.proto

import type { MintAssetPartial as _mintrpc_MintAssetPartial, MintAsset as _mintrpc_MintAsset } from '../mintrpc/MintAsset';
import type { BatchState as _mintrpc_BatchState } from '../mintrpc/BatchState';

export interface MintingBatchPartial {
  'batchKey'?: (Buffer | Uint8Array | string);
  'assets'?: (_mintrpc_MintAssetPartial)[];
  'state'?: (_mintrpc_BatchState | keyof typeof _mintrpc_BatchState);
}

export interface MintingBatch {
  'batchKey': (Buffer);
  'assets': (_mintrpc_MintAsset)[];
  'state': (keyof typeof _mintrpc_BatchState);
}
