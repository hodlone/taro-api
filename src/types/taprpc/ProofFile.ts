// Original file: protos/taprootassets.proto


export interface ProofFilePartial {
  'rawProof'?: (Buffer | Uint8Array | string);
  'genesisPoint'?: (string);
}

export interface ProofFile {
  'rawProof': (Buffer);
  'genesisPoint': (string);
}
