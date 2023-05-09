// Original file: protos/universe.proto

import type { AssetPartial as _tarorpc_AssetPartial, Asset as _tarorpc_Asset } from '../tarorpc/Asset';

export interface AssetLeafPartial {
  'asset'?: (_tarorpc_AssetPartial | null);
  'issuanceProof'?: (Buffer | Uint8Array | string);
}

export interface AssetLeaf {
  'asset': (_tarorpc_Asset | null);
  'issuanceProof': (Buffer);
}
