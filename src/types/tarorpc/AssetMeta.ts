// Original file: protos/taro.proto

import type { AssetMetaType as _tarorpc_AssetMetaType } from '../tarorpc/AssetMetaType';

export interface AssetMetaPartial {
  'data'?: (Buffer | Uint8Array | string);
  'type'?: (_tarorpc_AssetMetaType | keyof typeof _tarorpc_AssetMetaType);
  'metaHash'?: (Buffer | Uint8Array | string);
}

export interface AssetMeta {
  'data': (Buffer);
  'type': (keyof typeof _tarorpc_AssetMetaType);
  'metaHash': (Buffer);
}
