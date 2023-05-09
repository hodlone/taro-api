// Original file: protos/taro.proto

import type { PrevInputAssetPartial as _tarorpc_PrevInputAssetPartial, PrevInputAsset as _tarorpc_PrevInputAsset } from '../tarorpc/PrevInputAsset';
import type { SplitCommitmentPartial as _tarorpc_SplitCommitmentPartial, SplitCommitment as _tarorpc_SplitCommitment } from '../tarorpc/SplitCommitment';

export interface PrevWitnessPartial {
  'prevId'?: (_tarorpc_PrevInputAssetPartial | null);
  'txWitness'?: (Buffer | Uint8Array | string)[];
  'splitCommitment'?: (_tarorpc_SplitCommitmentPartial | null);
}

export interface PrevWitness {
  'prevId': (_tarorpc_PrevInputAsset | null);
  'txWitness': (Buffer)[];
  'splitCommitment': (_tarorpc_SplitCommitment | null);
}
