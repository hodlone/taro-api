// Original file: protos/taro.proto

import type { GenesisInfo as _tarorpc_GenesisInfo, GenesisInfo__Output as _tarorpc_GenesisInfo__Output } from '../tarorpc/GenesisInfo';
import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface AssetBalance {
  'assetGenesis'?: (_tarorpc_GenesisInfo | null);
  'assetType'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'balance'?: (number | string | Long);
}

export interface AssetBalance__Output {
  'assetGenesis': (_tarorpc_GenesisInfo__Output | null);
  'assetType': (keyof typeof _tarorpc_AssetType);
  'balance': (string);
}
