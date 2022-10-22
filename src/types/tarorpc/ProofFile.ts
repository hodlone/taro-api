// Original file: protos/taro.proto


export interface ProofFile {
  'rawProof'?: (Buffer | Uint8Array | string);
  'genesisPoint'?: (string);
}

export interface ProofFile__Output {
  'rawProof': (Buffer);
  'genesisPoint': (string);
}
