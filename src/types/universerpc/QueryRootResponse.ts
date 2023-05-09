// Original file: protos/universe.proto

import type { UniverseRootPartial as _universerpc_UniverseRootPartial, UniverseRoot as _universerpc_UniverseRoot } from '../universerpc/UniverseRoot';

export interface QueryRootResponsePartial {
  'assetRoot'?: (_universerpc_UniverseRootPartial | null);
}

export interface QueryRootResponse {
  'assetRoot': (_universerpc_UniverseRoot | null);
}
