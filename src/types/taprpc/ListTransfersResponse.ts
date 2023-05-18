// Original file: protos/taprootassets.proto

import type { AssetTransferPartial as _taprpc_AssetTransferPartial, AssetTransfer as _taprpc_AssetTransfer } from '../taprpc/AssetTransfer';

export interface ListTransfersResponsePartial {
  'transfers'?: (_taprpc_AssetTransferPartial)[];
}

export interface ListTransfersResponse {
  'transfers': (_taprpc_AssetTransfer)[];
}
