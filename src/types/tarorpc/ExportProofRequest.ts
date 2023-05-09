// Original file: protos/taro.proto


export interface ExportProofRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
}

export interface ExportProofRequest {
  'assetId': (Buffer);
  'scriptKey': (Buffer);
}
