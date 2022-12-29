// Original file: protos/taro.proto

import type { GenesisInfo as _tarorpc_GenesisInfo, GenesisInfo__Output as _tarorpc_GenesisInfo__Output } from '../tarorpc/GenesisInfo';
import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { AssetGroup as _tarorpc_AssetGroup, AssetGroup__Output as _tarorpc_AssetGroup__Output } from '../tarorpc/AssetGroup';
import type { AnchorInfo as _tarorpc_AnchorInfo, AnchorInfo__Output as _tarorpc_AnchorInfo__Output } from '../tarorpc/AnchorInfo';
import type { Long } from '@grpc/proto-loader';

export interface Asset {
  'version'?: (number);
  'assetGenesis'?: (_tarorpc_GenesisInfo | null);
  'assetType'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'amount'?: (number | string | Long);
  'lockTime'?: (number);
  'relativeLockTime'?: (number);
  'scriptVersion'?: (number);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'assetGroup'?: (_tarorpc_AssetGroup | null);
  'chainAnchor'?: (_tarorpc_AnchorInfo | null);
}

export interface Asset__Output {
  'version': (number);
  'assetGenesis': (_tarorpc_GenesisInfo__Output | null);
  'assetType': (keyof typeof _tarorpc_AssetType);
  'amount': (string);
  'lockTime': (number);
  'relativeLockTime': (number);
  'scriptVersion': (number);
  'scriptKey': (Buffer);
  'assetGroup': (_tarorpc_AssetGroup__Output | null);
  'chainAnchor': (_tarorpc_AnchorInfo__Output | null);
}
