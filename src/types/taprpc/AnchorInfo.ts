// Original file: protos/taprootassets.proto


export interface AnchorInfoPartial {
  'anchorTx'?: (Buffer | Uint8Array | string);
  'anchorTxid'?: (string);
  'anchorBlockHash'?: (Buffer | Uint8Array | string);
  'anchorOutpoint'?: (string);
  'internalKey'?: (Buffer | Uint8Array | string);
  'merkleRoot'?: (Buffer | Uint8Array | string);
  'tapscriptSibling'?: (Buffer | Uint8Array | string);
}

export interface AnchorInfo {
  'anchorTx': (Buffer);
  'anchorTxid': (string);
  'anchorBlockHash': (Buffer);
  'anchorOutpoint': (string);
  'internalKey': (Buffer);
  'merkleRoot': (Buffer);
  'tapscriptSibling': (Buffer);
}
