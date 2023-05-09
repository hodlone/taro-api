// Original file: protos/taro.proto

import type { KeyLocatorPartial as _tarorpc_KeyLocatorPartial, KeyLocator as _tarorpc_KeyLocator } from '../tarorpc/KeyLocator';

export interface KeyDescriptorPartial {
  'rawKeyBytes'?: (Buffer | Uint8Array | string);
  'keyLoc'?: (_tarorpc_KeyLocatorPartial | null);
}

export interface KeyDescriptor {
  'rawKeyBytes': (Buffer);
  'keyLoc': (_tarorpc_KeyLocator | null);
}
