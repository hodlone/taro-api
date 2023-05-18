// Original file: protos/taprootassets.proto

import type { KeyLocatorPartial as _taprpc_KeyLocatorPartial, KeyLocator as _taprpc_KeyLocator } from '../taprpc/KeyLocator';

export interface KeyDescriptorPartial {
  'rawKeyBytes'?: (Buffer | Uint8Array | string);
  'keyLoc'?: (_taprpc_KeyLocatorPartial | null);
}

export interface KeyDescriptor {
  'rawKeyBytes': (Buffer);
  'keyLoc': (_taprpc_KeyLocator | null);
}
