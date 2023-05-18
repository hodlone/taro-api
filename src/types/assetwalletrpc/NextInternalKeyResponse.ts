// Original file: protos/assetwallet.proto

import type { KeyDescriptorPartial as _taprpc_KeyDescriptorPartial, KeyDescriptor as _taprpc_KeyDescriptor } from '../taprpc/KeyDescriptor';

export interface NextInternalKeyResponsePartial {
  'internalKey'?: (_taprpc_KeyDescriptorPartial | null);
}

export interface NextInternalKeyResponse {
  'internalKey': (_taprpc_KeyDescriptor | null);
}
