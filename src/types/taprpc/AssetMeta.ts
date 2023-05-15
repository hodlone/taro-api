// Original file: protos/taprootassets.proto

import type { AssetMetaType as _taprpc_AssetMetaType } from '../taprpc/AssetMetaType';

export interface AssetMetaPartial {
  'data'?: (Buffer | Uint8Array | string);
  'type'?: (_taprpc_AssetMetaType | keyof typeof _taprpc_AssetMetaType);
  'metaHash'?: (Buffer | Uint8Array | string);
}

export interface AssetMeta {
  'data': (Buffer);
  'type': (keyof typeof _taprpc_AssetMetaType);
  'metaHash': (Buffer);
}
