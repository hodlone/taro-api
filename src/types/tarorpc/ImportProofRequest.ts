// Original file: protos/taro.proto


export interface ImportProofRequest {
  'proofFile'?: (Buffer | Uint8Array | string);
  'genesisPoint'?: (string);
}

export interface ImportProofRequest__Output {
  'proofFile': (Buffer);
  'genesisPoint': (string);
}
