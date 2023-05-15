// Original file: protos/taprootassets.proto


export interface FetchAssetMetaRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'metaHash'?: (Buffer | Uint8Array | string);
  'asset'?: "assetId"|"metaHash";
}

export interface FetchAssetMetaRequest {
  'assetId'?: (Buffer);
  'metaHash'?: (Buffer);
  'asset': "assetId"|"metaHash";
}
