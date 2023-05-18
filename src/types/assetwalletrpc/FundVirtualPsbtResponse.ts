// Original file: protos/assetwallet.proto


export interface FundVirtualPsbtResponsePartial {
  'fundedPsbt'?: (Buffer | Uint8Array | string);
  'changeOutputIndex'?: (number);
}

export interface FundVirtualPsbtResponse {
  'fundedPsbt': (Buffer);
  'changeOutputIndex': (number);
}
