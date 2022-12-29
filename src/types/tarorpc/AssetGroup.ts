// Original file: protos/taro.proto


export interface AssetGroup {
  'rawGroupKey'?: (Buffer | Uint8Array | string);
  'tweakedGroupKey'?: (Buffer | Uint8Array | string);
  'assetIdSig'?: (Buffer | Uint8Array | string);
}

export interface AssetGroup__Output {
  'rawGroupKey': (Buffer);
  'tweakedGroupKey': (Buffer);
  'assetIdSig': (Buffer);
}
