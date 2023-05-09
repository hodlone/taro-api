// Original file: protos/universe.proto

import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';

export interface SyncTargetPartial {
  'id'?: (_universerpc_IDPartial | null);
}

export interface SyncTarget {
  'id': (_universerpc_ID | null);
}
