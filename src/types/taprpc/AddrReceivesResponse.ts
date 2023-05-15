// Original file: protos/taprootassets.proto

import type { AddrEventPartial as _taprpc_AddrEventPartial, AddrEvent as _taprpc_AddrEvent } from '../taprpc/AddrEvent';

export interface AddrReceivesResponsePartial {
  'events'?: (_taprpc_AddrEventPartial)[];
}

export interface AddrReceivesResponse {
  'events': (_taprpc_AddrEvent)[];
}
