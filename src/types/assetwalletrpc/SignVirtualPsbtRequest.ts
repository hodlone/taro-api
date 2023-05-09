// Original file: protos/assetwallet.proto


export interface SignVirtualPsbtRequestPartial {
  'fundedPsbt'?: (Buffer | Uint8Array | string);
}

export interface SignVirtualPsbtRequest {
  'fundedPsbt': (Buffer);
}
