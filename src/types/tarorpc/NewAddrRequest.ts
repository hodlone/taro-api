// Original file: protos/taro.proto

import type { ScriptKeyPartial as _tarorpc_ScriptKeyPartial, ScriptKey as _tarorpc_ScriptKey } from '../tarorpc/ScriptKey';
import type { KeyDescriptorPartial as _tarorpc_KeyDescriptorPartial, KeyDescriptor as _tarorpc_KeyDescriptor } from '../tarorpc/KeyDescriptor';
import type { Long } from '@grpc/proto-loader';

export interface NewAddrRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'amt'?: (number | string | Long);
  'scriptKey'?: (_tarorpc_ScriptKeyPartial | null);
  'internalKey'?: (_tarorpc_KeyDescriptorPartial | null);
  'tapscriptSibling'?: (Buffer | Uint8Array | string);
}

export interface NewAddrRequest {
  'assetId': (Buffer);
  'amt': (string);
  'scriptKey': (_tarorpc_ScriptKey | null);
  'internalKey': (_tarorpc_KeyDescriptor | null);
  'tapscriptSibling': (Buffer);
}
