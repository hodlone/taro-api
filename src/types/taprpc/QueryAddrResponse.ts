// Original file: protos/taprootassets.proto

import type { AddrPartial as _taprpc_AddrPartial, Addr as _taprpc_Addr } from '../taprpc/Addr';

export interface QueryAddrResponsePartial {
  'addrs'?: (_taprpc_AddrPartial)[];
}

export interface QueryAddrResponse {
  'addrs': (_taprpc_Addr)[];
}
