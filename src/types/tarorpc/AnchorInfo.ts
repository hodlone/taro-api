// Original file: protos/taro.proto


export interface AnchorInfo {
  'anchorTx'?: (Buffer | Uint8Array | string);
  'anchorTxid'?: (Buffer | Uint8Array | string);
  'anchorBlockHash'?: (Buffer | Uint8Array | string);
  'anchorOutpoint'?: (string);
  'internalKey'?: (Buffer | Uint8Array | string);
}

export interface AnchorInfo__Output {
  'anchorTx': (Buffer);
  'anchorTxid': (Buffer);
  'anchorBlockHash': (Buffer);
  'anchorOutpoint': (string);
  'internalKey': (Buffer);
}
