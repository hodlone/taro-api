// Original file: protos/taprootassets.proto

import type { AssetPartial as _taprpc_AssetPartial, Asset as _taprpc_Asset } from '../taprpc/Asset';
import type { Long } from '@grpc/proto-loader';

export interface ManagedUtxoPartial {
  'outPoint'?: (string);
  'amtSat'?: (number | string | Long);
  'internalKey'?: (Buffer | Uint8Array | string);
  'taprootAssetRoot'?: (Buffer | Uint8Array | string);
  'merkleRoot'?: (Buffer | Uint8Array | string);
  'assets'?: (_taprpc_AssetPartial)[];
}

export interface ManagedUtxo {
  'outPoint': (string);
  'amtSat': (string);
  'internalKey': (Buffer);
  'taprootAssetRoot': (Buffer);
  'merkleRoot': (Buffer);
  'assets': (_taprpc_Asset)[];
}
