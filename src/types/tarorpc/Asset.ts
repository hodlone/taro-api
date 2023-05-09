// Original file: protos/taro.proto

import type { GenesisInfoPartial as _tarorpc_GenesisInfoPartial, GenesisInfo as _tarorpc_GenesisInfo } from '../tarorpc/GenesisInfo';
import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { AssetGroupPartial as _tarorpc_AssetGroupPartial, AssetGroup as _tarorpc_AssetGroup } from '../tarorpc/AssetGroup';
import type { AnchorInfoPartial as _tarorpc_AnchorInfoPartial, AnchorInfo as _tarorpc_AnchorInfo } from '../tarorpc/AnchorInfo';
import type { PrevWitnessPartial as _tarorpc_PrevWitnessPartial, PrevWitness as _tarorpc_PrevWitness } from '../tarorpc/PrevWitness';
import type { Long } from '@grpc/proto-loader';

export interface AssetPartial {
  'version'?: (number);
  'assetGenesis'?: (_tarorpc_GenesisInfoPartial | null);
  'assetType'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'amount'?: (number | string | Long);
  'lockTime'?: (number);
  'relativeLockTime'?: (number);
  'scriptVersion'?: (number);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'scriptKeyIsLocal'?: (boolean);
  'assetGroup'?: (_tarorpc_AssetGroupPartial | null);
  'chainAnchor'?: (_tarorpc_AnchorInfoPartial | null);
  'prevWitnesses'?: (_tarorpc_PrevWitnessPartial)[];
  'isSpent'?: (boolean);
}

export interface Asset {
  'version': (number);
  'assetGenesis': (_tarorpc_GenesisInfo | null);
  'assetType': (keyof typeof _tarorpc_AssetType);
  'amount': (string);
  'lockTime': (number);
  'relativeLockTime': (number);
  'scriptVersion': (number);
  'scriptKey': (Buffer);
  'scriptKeyIsLocal': (boolean);
  'assetGroup': (_tarorpc_AssetGroup | null);
  'chainAnchor': (_tarorpc_AnchorInfo | null);
  'prevWitnesses': (_tarorpc_PrevWitness)[];
  'isSpent': (boolean);
}
