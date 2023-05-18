// Original file: protos/mint.proto


export interface ListBatchRequestPartial {
  'batchKey'?: (Buffer | Uint8Array | string);
}

export interface ListBatchRequest {
  'batchKey': (Buffer);
}
