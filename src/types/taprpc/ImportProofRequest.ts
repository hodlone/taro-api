// Original file: protos/taprootassets.proto


export interface ImportProofRequestPartial {
  'proofFile'?: (Buffer | Uint8Array | string);
  'genesisPoint'?: (string);
}

export interface ImportProofRequest {
  'proofFile': (Buffer);
  'genesisPoint': (string);
}
