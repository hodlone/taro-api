// Original file: protos/taro.proto

import type { AssetBalance as _tarorpc_AssetBalance, AssetBalance__Output as _tarorpc_AssetBalance__Output } from '../tarorpc/AssetBalance';
import type { AssetFamilyBalance as _tarorpc_AssetFamilyBalance, AssetFamilyBalance__Output as _tarorpc_AssetFamilyBalance__Output } from '../tarorpc/AssetFamilyBalance';

export interface ListBalancesResponse {
  'assetBalances'?: ({[key: string]: _tarorpc_AssetBalance});
  'assetFamilyBalances'?: ({[key: string]: _tarorpc_AssetFamilyBalance});
}

export interface ListBalancesResponse__Output {
  'assetBalances': ({[key: string]: _tarorpc_AssetBalance__Output});
  'assetFamilyBalances': ({[key: string]: _tarorpc_AssetFamilyBalance__Output});
}
