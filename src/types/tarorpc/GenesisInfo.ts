// Original file: protos/taro.proto


export interface GenesisInfo {
  'genesisPoint'?: (string);
  'name'?: (string);
  'meta'?: (Buffer | Uint8Array | string);
  'assetId'?: (Buffer | Uint8Array | string);
  'outputIndex'?: (number);
  'genesisBootstrapInfo'?: (Buffer | Uint8Array | string);
  'version'?: (number);
}

export interface GenesisInfo__Output {
  'genesisPoint': (string);
  'name': (string);
  'meta': (Buffer);
  'assetId': (Buffer);
  'outputIndex': (number);
  'genesisBootstrapInfo': (Buffer);
  'version': (number);
}
