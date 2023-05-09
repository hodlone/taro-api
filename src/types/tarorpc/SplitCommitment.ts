// Original file: protos/taro.proto

import type { AssetPartial as _tarorpc_AssetPartial, Asset as _tarorpc_Asset } from '../tarorpc/Asset';

export interface SplitCommitmentPartial {
  'rootAsset'?: (_tarorpc_AssetPartial | null);
}

export interface SplitCommitment {
  'rootAsset': (_tarorpc_Asset | null);
}
