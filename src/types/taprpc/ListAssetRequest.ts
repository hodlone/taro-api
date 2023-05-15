// Original file: protos/taprootassets.proto


export interface ListAssetRequestPartial {
  'withWitness'?: (boolean);
  'includeSpent'?: (boolean);
}

export interface ListAssetRequest {
  'withWitness': (boolean);
  'includeSpent': (boolean);
}
