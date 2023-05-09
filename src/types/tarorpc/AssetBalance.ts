// Original file: protos/taro.proto

import type { GenesisInfoPartial as _tarorpc_GenesisInfoPartial, GenesisInfo as _tarorpc_GenesisInfo } from '../tarorpc/GenesisInfo';
import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface AssetBalancePartial {
  'assetGenesis'?: (_tarorpc_GenesisInfoPartial | null);
  'assetType'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'balance'?: (number | string | Long);
}

export interface AssetBalance {
  'assetGenesis': (_tarorpc_GenesisInfo | null);
  'assetType': (keyof typeof _tarorpc_AssetType);
  'balance': (string);
}
