// Original file: protos/taprootassets.proto

import type { AssetBalancePartial as _taprpc_AssetBalancePartial, AssetBalance as _taprpc_AssetBalance } from '../taprpc/AssetBalance';
import type { AssetGroupBalancePartial as _taprpc_AssetGroupBalancePartial, AssetGroupBalance as _taprpc_AssetGroupBalance } from '../taprpc/AssetGroupBalance';

export interface ListBalancesResponsePartial {
  'assetBalances'?: ({[key: string]: _taprpc_AssetBalancePartial});
  'assetGroupBalances'?: ({[key: string]: _taprpc_AssetGroupBalancePartial});
}

export interface ListBalancesResponse {
  'assetBalances': ({[key: string]: _taprpc_AssetBalance});
  'assetGroupBalances': ({[key: string]: _taprpc_AssetGroupBalance});
}
