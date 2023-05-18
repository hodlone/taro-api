// Original file: protos/mint.proto

import type { MintingBatchPartial as _mintrpc_MintingBatchPartial, MintingBatch as _mintrpc_MintingBatch } from '../mintrpc/MintingBatch';

export interface ListBatchResponsePartial {
  'batches'?: (_mintrpc_MintingBatchPartial)[];
}

export interface ListBatchResponse {
  'batches': (_mintrpc_MintingBatch)[];
}
