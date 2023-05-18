// Original file: protos/mint.proto


export interface FinalizeBatchResponsePartial {
  'batchKey'?: (Buffer | Uint8Array | string);
}

export interface FinalizeBatchResponse {
  'batchKey': (Buffer);
}
