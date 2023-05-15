// Original file: protos/taprootassets.proto

import type { AddrEventStatus as _taprpc_AddrEventStatus } from '../taprpc/AddrEventStatus';

export interface AddrReceivesRequestPartial {
  'filterAddr'?: (string);
  'filterStatus'?: (_taprpc_AddrEventStatus | keyof typeof _taprpc_AddrEventStatus);
}

export interface AddrReceivesRequest {
  'filterAddr': (string);
  'filterStatus': (keyof typeof _taprpc_AddrEventStatus);
}
