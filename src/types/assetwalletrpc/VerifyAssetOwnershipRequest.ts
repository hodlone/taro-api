// Original file: protos/assetwallet.proto


export interface VerifyAssetOwnershipRequestPartial {
  'proofWithWitness'?: (Buffer | Uint8Array | string);
}

export interface VerifyAssetOwnershipRequest {
  'proofWithWitness': (Buffer);
}
