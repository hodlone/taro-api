// Original file: protos/taprootassets.proto

import type { AssetPartial as _taprpc_AssetPartial, Asset as _taprpc_Asset } from '../taprpc/Asset';

export interface SplitCommitmentPartial {
  'rootAsset'?: (_taprpc_AssetPartial | null);
}

export interface SplitCommitment {
  'rootAsset': (_taprpc_Asset | null);
}
