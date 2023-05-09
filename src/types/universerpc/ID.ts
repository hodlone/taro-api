// Original file: protos/universe.proto


export interface IDPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'assetIdStr'?: (string);
  'groupKey'?: (Buffer | Uint8Array | string);
  'groupKeyStr'?: (string);
  'id'?: "assetId"|"assetIdStr"|"groupKey"|"groupKeyStr";
}

export interface ID {
  'assetId'?: (Buffer);
  'assetIdStr'?: (string);
  'groupKey'?: (Buffer);
  'groupKeyStr'?: (string);
  'id': "assetId"|"assetIdStr"|"groupKey"|"groupKeyStr";
}
