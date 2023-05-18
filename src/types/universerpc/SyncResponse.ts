// Original file: protos/universe.proto

import type { SyncedUniversePartial as _universerpc_SyncedUniversePartial, SyncedUniverse as _universerpc_SyncedUniverse } from '../universerpc/SyncedUniverse';

export interface SyncResponsePartial {
  'syncedUniverses'?: (_universerpc_SyncedUniversePartial)[];
}

export interface SyncResponse {
  'syncedUniverses': (_universerpc_SyncedUniverse)[];
}
