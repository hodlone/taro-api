// Original file: protos/universe.proto

import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';
import type { AssetKeyPartial as _universerpc_AssetKeyPartial, AssetKey as _universerpc_AssetKey } from '../universerpc/AssetKey';

export interface UniverseKeyPartial {
  'id'?: (_universerpc_IDPartial | null);
  'leafKey'?: (_universerpc_AssetKeyPartial | null);
}

export interface UniverseKey {
  'id': (_universerpc_ID | null);
  'leafKey': (_universerpc_AssetKey | null);
}
