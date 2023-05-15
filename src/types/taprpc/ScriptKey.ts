// Original file: protos/taprootassets.proto

import type { KeyDescriptorPartial as _taprpc_KeyDescriptorPartial, KeyDescriptor as _taprpc_KeyDescriptor } from '../taprpc/KeyDescriptor';

export interface ScriptKeyPartial {
  'pubKey'?: (Buffer | Uint8Array | string);
  'keyDesc'?: (_taprpc_KeyDescriptorPartial | null);
  'tapTweak'?: (Buffer | Uint8Array | string);
}

export interface ScriptKey {
  'pubKey': (Buffer);
  'keyDesc': (_taprpc_KeyDescriptor | null);
  'tapTweak': (Buffer);
}
