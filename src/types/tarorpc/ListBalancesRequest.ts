// Original file: protos/taro.proto


export interface ListBalancesRequestPartial {
  'assetId'?: (boolean);
  'groupKey'?: (boolean);
  'assetFilter'?: (Buffer | Uint8Array | string);
  'groupKeyFilter'?: (Buffer | Uint8Array | string);
  'groupBy'?: "assetId"|"groupKey";
}

export interface ListBalancesRequest {
  'assetId'?: (boolean);
  'groupKey'?: (boolean);
  'assetFilter': (Buffer);
  'groupKeyFilter': (Buffer);
  'groupBy': "assetId"|"groupKey";
}
