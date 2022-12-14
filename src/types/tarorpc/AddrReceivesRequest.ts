// Original file: protos/taro.proto

import type { AddrEventStatus as _tarorpc_AddrEventStatus } from '../tarorpc/AddrEventStatus';

export interface AddrReceivesRequest {
  'filterAddr'?: (string);
  'filterStatus'?: (_tarorpc_AddrEventStatus | keyof typeof _tarorpc_AddrEventStatus);
}

export interface AddrReceivesRequest__Output {
  'filterAddr': (string);
  'filterStatus': (keyof typeof _tarorpc_AddrEventStatus);
}
