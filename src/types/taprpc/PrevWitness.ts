// Original file: protos/taprootassets.proto

import type { PrevInputAssetPartial as _taprpc_PrevInputAssetPartial, PrevInputAsset as _taprpc_PrevInputAsset } from '../taprpc/PrevInputAsset';
import type { SplitCommitmentPartial as _taprpc_SplitCommitmentPartial, SplitCommitment as _taprpc_SplitCommitment } from '../taprpc/SplitCommitment';

export interface PrevWitnessPartial {
  'prevId'?: (_taprpc_PrevInputAssetPartial | null);
  'txWitness'?: (Buffer | Uint8Array | string)[];
  'splitCommitment'?: (_taprpc_SplitCommitmentPartial | null);
}

export interface PrevWitness {
  'prevId': (_taprpc_PrevInputAsset | null);
  'txWitness': (Buffer)[];
  'splitCommitment': (_taprpc_SplitCommitment | null);
}
