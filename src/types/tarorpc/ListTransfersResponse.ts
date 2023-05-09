// Original file: protos/taro.proto

import type { AssetTransferPartial as _tarorpc_AssetTransferPartial, AssetTransfer as _tarorpc_AssetTransfer } from '../tarorpc/AssetTransfer';

export interface ListTransfersResponsePartial {
  'transfers'?: (_tarorpc_AssetTransferPartial)[];
}

export interface ListTransfersResponse {
  'transfers': (_tarorpc_AssetTransfer)[];
}
