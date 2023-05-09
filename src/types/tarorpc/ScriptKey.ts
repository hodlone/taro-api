// Original file: protos/taro.proto

import type { KeyDescriptorPartial as _tarorpc_KeyDescriptorPartial, KeyDescriptor as _tarorpc_KeyDescriptor } from '../tarorpc/KeyDescriptor';

export interface ScriptKeyPartial {
  'pubKey'?: (Buffer | Uint8Array | string);
  'keyDesc'?: (_tarorpc_KeyDescriptorPartial | null);
  'tapTweak'?: (Buffer | Uint8Array | string);
}

export interface ScriptKey {
  'pubKey': (Buffer);
  'keyDesc': (_tarorpc_KeyDescriptor | null);
  'tapTweak': (Buffer);
}
