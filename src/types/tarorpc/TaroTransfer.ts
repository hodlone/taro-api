// Original file: protos/taro.proto

import type { PrevInputAsset as _tarorpc_PrevInputAsset, PrevInputAsset__Output as _tarorpc_PrevInputAsset__Output } from '../tarorpc/PrevInputAsset';
import type { AssetOutput as _tarorpc_AssetOutput, AssetOutput__Output as _tarorpc_AssetOutput__Output } from '../tarorpc/AssetOutput';

export interface TaroTransfer {
  'oldTaroRoot'?: (Buffer | Uint8Array | string);
  'newTaroRoot'?: (Buffer | Uint8Array | string);
  'prevInputs'?: (_tarorpc_PrevInputAsset)[];
  'newOutputs'?: (_tarorpc_AssetOutput)[];
}

export interface TaroTransfer__Output {
  'oldTaroRoot': (Buffer);
  'newTaroRoot': (Buffer);
  'prevInputs': (_tarorpc_PrevInputAsset__Output)[];
  'newOutputs': (_tarorpc_AssetOutput__Output)[];
}
