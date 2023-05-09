// Original file: protos/taro.proto

import type { AddrPartial as _tarorpc_AddrPartial, Addr as _tarorpc_Addr } from '../tarorpc/Addr';

export interface QueryAddrResponsePartial {
  'addrs'?: (_tarorpc_AddrPartial)[];
}

export interface QueryAddrResponse {
  'addrs': (_tarorpc_Addr)[];
}
