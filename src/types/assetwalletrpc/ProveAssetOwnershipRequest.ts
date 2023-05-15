// Original file: protos/assetwallet.proto


export interface ProveAssetOwnershipRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
}

export interface ProveAssetOwnershipRequest {
  'assetId': (Buffer);
  'scriptKey': (Buffer);
}
