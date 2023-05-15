// Original file: protos/taprootassets.proto


export interface ExportProofRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
}

export interface ExportProofRequest {
  'assetId': (Buffer);
  'scriptKey': (Buffer);
}
