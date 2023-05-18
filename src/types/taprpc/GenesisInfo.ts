// Original file: protos/taprootassets.proto


export interface GenesisInfoPartial {
  'genesisPoint'?: (string);
  'name'?: (string);
  'metaHash'?: (Buffer | Uint8Array | string);
  'assetId'?: (Buffer | Uint8Array | string);
  'outputIndex'?: (number);
  'version'?: (number);
}

export interface GenesisInfo {
  'genesisPoint': (string);
  'name': (string);
  'metaHash': (Buffer);
  'assetId': (Buffer);
  'outputIndex': (number);
  'version': (number);
}
