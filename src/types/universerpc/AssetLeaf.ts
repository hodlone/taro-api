// Original file: protos/universe.proto

import type { AssetPartial as _taprpc_AssetPartial, Asset as _taprpc_Asset } from '../taprpc/Asset';

export interface AssetLeafPartial {
  'asset'?: (_taprpc_AssetPartial | null);
  'issuanceProof'?: (Buffer | Uint8Array | string);
}

export interface AssetLeaf {
  'asset': (_taprpc_Asset | null);
  'issuanceProof': (Buffer);
}
