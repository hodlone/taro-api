// Original file: protos/taro.proto


export interface ListBalancesRequest {
  'assetId'?: (boolean);
  'famKey'?: (boolean);
  'assetFilter'?: (Buffer | Uint8Array | string);
  'familyKeyFilter'?: (Buffer | Uint8Array | string);
  'groupBy'?: "assetId"|"famKey";
}

export interface ListBalancesRequest__Output {
  'assetId'?: (boolean);
  'famKey'?: (boolean);
  'assetFilter': (Buffer);
  'familyKeyFilter': (Buffer);
  'groupBy': "assetId"|"famKey";
}
