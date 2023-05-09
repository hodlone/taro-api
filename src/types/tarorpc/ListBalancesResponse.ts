// Original file: protos/taro.proto

import type { AssetBalancePartial as _tarorpc_AssetBalancePartial, AssetBalance as _tarorpc_AssetBalance } from '../tarorpc/AssetBalance';
import type { AssetGroupBalancePartial as _tarorpc_AssetGroupBalancePartial, AssetGroupBalance as _tarorpc_AssetGroupBalance } from '../tarorpc/AssetGroupBalance';

export interface ListBalancesResponsePartial {
  'assetBalances'?: ({[key: string]: _tarorpc_AssetBalancePartial});
  'assetGroupBalances'?: ({[key: string]: _tarorpc_AssetGroupBalancePartial});
}

export interface ListBalancesResponse {
  'assetBalances': ({[key: string]: _tarorpc_AssetBalance});
  'assetGroupBalances': ({[key: string]: _tarorpc_AssetGroupBalance});
}
