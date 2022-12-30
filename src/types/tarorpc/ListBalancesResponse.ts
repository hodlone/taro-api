// Original file: protos/taro.proto

import type { AssetBalance as _tarorpc_AssetBalance, AssetBalance__Output as _tarorpc_AssetBalance__Output } from '../tarorpc/AssetBalance';
import type { AssetGroupBalance as _tarorpc_AssetGroupBalance, AssetGroupBalance__Output as _tarorpc_AssetGroupBalance__Output } from '../tarorpc/AssetGroupBalance';

export interface ListBalancesResponse {
  'assetBalances'?: ({[key: string]: _tarorpc_AssetBalance});
  'assetGroupBalances'?: ({[key: string]: _tarorpc_AssetGroupBalance});
}

export interface ListBalancesResponse__Output {
  'assetBalances': ({[key: string]: _tarorpc_AssetBalance__Output});
  'assetGroupBalances': ({[key: string]: _tarorpc_AssetGroupBalance__Output});
}
