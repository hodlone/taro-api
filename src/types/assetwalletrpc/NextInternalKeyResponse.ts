// Original file: protos/assetwallet.proto

import type { KeyDescriptorPartial as _tarorpc_KeyDescriptorPartial, KeyDescriptor as _tarorpc_KeyDescriptor } from '../tarorpc/KeyDescriptor';

export interface NextInternalKeyResponsePartial {
  'internalKey'?: (_tarorpc_KeyDescriptorPartial | null);
}

export interface NextInternalKeyResponse {
  'internalKey': (_tarorpc_KeyDescriptor | null);
}
