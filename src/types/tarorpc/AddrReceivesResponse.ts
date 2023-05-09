// Original file: protos/taro.proto

import type { AddrEventPartial as _tarorpc_AddrEventPartial, AddrEvent as _tarorpc_AddrEvent } from '../tarorpc/AddrEvent';

export interface AddrReceivesResponsePartial {
  'events'?: (_tarorpc_AddrEventPartial)[];
}

export interface AddrReceivesResponse {
  'events': (_tarorpc_AddrEvent)[];
}
