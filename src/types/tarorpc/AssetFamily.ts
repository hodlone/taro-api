// Original file: protos/taro.proto


export interface AssetFamily {
  'rawFamilyKey'?: (Buffer | Uint8Array | string);
  'tweakedFamilyKey'?: (Buffer | Uint8Array | string);
  'assetIdSig'?: (Buffer | Uint8Array | string);
}

export interface AssetFamily__Output {
  'rawFamilyKey': (Buffer);
  'tweakedFamilyKey': (Buffer);
  'assetIdSig': (Buffer);
}
