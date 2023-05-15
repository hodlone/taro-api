// Original file: protos/taprootassets.proto

import type { GenesisInfoPartial as _taprpc_GenesisInfoPartial, GenesisInfo as _taprpc_GenesisInfo } from '../taprpc/GenesisInfo';
import type { AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface AssetBalancePartial {
  'assetGenesis'?: (_taprpc_GenesisInfoPartial | null);
  'assetType'?: (_taprpc_AssetType | keyof typeof _taprpc_AssetType);
  'balance'?: (number | string | Long);
}

export interface AssetBalance {
  'assetGenesis': (_taprpc_GenesisInfo | null);
  'assetType': (keyof typeof _taprpc_AssetType);
  'balance': (string);
}
