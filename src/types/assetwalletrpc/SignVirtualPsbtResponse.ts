// Original file: protos/assetwallet.proto


export interface SignVirtualPsbtResponsePartial {
  'signedPsbt'?: (Buffer | Uint8Array | string);
  'signedInputs'?: (number)[];
}

export interface SignVirtualPsbtResponse {
  'signedPsbt': (Buffer);
  'signedInputs': (number)[];
}
