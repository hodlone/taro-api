// Original file: protos/taprootassets.proto

import type { GenesisInfoPartial as _taprpc_GenesisInfoPartial, GenesisInfo as _taprpc_GenesisInfo } from '../taprpc/GenesisInfo';
import type { AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { AssetGroupPartial as _taprpc_AssetGroupPartial, AssetGroup as _taprpc_AssetGroup } from '../taprpc/AssetGroup';
import type { AnchorInfoPartial as _taprpc_AnchorInfoPartial, AnchorInfo as _taprpc_AnchorInfo } from '../taprpc/AnchorInfo';
import type { PrevWitnessPartial as _taprpc_PrevWitnessPartial, PrevWitness as _taprpc_PrevWitness } from '../taprpc/PrevWitness';
import type { Long } from '@grpc/proto-loader';

export interface AssetPartial {
  'version'?: (number);
  'assetGenesis'?: (_taprpc_GenesisInfoPartial | null);
  'assetType'?: (_taprpc_AssetType | keyof typeof _taprpc_AssetType);
  'amount'?: (number | string | Long);
  'lockTime'?: (number);
  'relativeLockTime'?: (number);
  'scriptVersion'?: (number);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'scriptKeyIsLocal'?: (boolean);
  'assetGroup'?: (_taprpc_AssetGroupPartial | null);
  'chainAnchor'?: (_taprpc_AnchorInfoPartial | null);
  'prevWitnesses'?: (_taprpc_PrevWitnessPartial)[];
  'isSpent'?: (boolean);
}

export interface Asset {
  'version': (number);
  'assetGenesis': (_taprpc_GenesisInfo | null);
  'assetType': (keyof typeof _taprpc_AssetType);
  'amount': (string);
  'lockTime': (number);
  'relativeLockTime': (number);
  'scriptVersion': (number);
  'scriptKey': (Buffer);
  'scriptKeyIsLocal': (boolean);
  'assetGroup': (_taprpc_AssetGroup | null);
  'chainAnchor': (_taprpc_AnchorInfo | null);
  'prevWitnesses': (_taprpc_PrevWitness)[];
  'isSpent': (boolean);
}
