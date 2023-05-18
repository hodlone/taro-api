// Original file: protos/universe.proto

import type { UniverseKeyPartial as _universerpc_UniverseKeyPartial, UniverseKey as _universerpc_UniverseKey } from '../universerpc/UniverseKey';
import type { UniverseRootPartial as _universerpc_UniverseRootPartial, UniverseRoot as _universerpc_UniverseRoot } from '../universerpc/UniverseRoot';
import type { AssetLeafPartial as _universerpc_AssetLeafPartial, AssetLeaf as _universerpc_AssetLeaf } from '../universerpc/AssetLeaf';

export interface IssuanceProofResponsePartial {
  'req'?: (_universerpc_UniverseKeyPartial | null);
  'universeRoot'?: (_universerpc_UniverseRootPartial | null);
  'universeInclusionProof'?: (Buffer | Uint8Array | string);
  'assetLeaf'?: (_universerpc_AssetLeafPartial | null);
}

export interface IssuanceProofResponse {
  'req': (_universerpc_UniverseKey | null);
  'universeRoot': (_universerpc_UniverseRoot | null);
  'universeInclusionProof': (Buffer);
  'assetLeaf': (_universerpc_AssetLeaf | null);
}
