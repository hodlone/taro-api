// Original file: protos/assetwallet.proto

import type { OutPointPartial as _assetwalletrpc_OutPointPartial, OutPoint as _assetwalletrpc_OutPoint } from '../assetwalletrpc/OutPoint';

export interface PrevIdPartial {
  'outpoint'?: (_assetwalletrpc_OutPointPartial | null);
  'id'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
}

export interface PrevId {
  'outpoint': (_assetwalletrpc_OutPoint | null);
  'id': (Buffer);
  'scriptKey': (Buffer);
}
