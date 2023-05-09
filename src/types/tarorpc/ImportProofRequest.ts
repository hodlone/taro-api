// Original file: protos/taro.proto


export interface ImportProofRequestPartial {
  'proofFile'?: (Buffer | Uint8Array | string);
  'genesisPoint'?: (string);
}

export interface ImportProofRequest {
  'proofFile': (Buffer);
  'genesisPoint': (string);
}
