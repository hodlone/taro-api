// Original file: protos/taro.proto

import type { AddrPartial as _tarorpc_AddrPartial, Addr as _tarorpc_Addr } from '../tarorpc/Addr';
import type { AddrEventStatus as _tarorpc_AddrEventStatus } from '../tarorpc/AddrEventStatus';
import type { Long } from '@grpc/proto-loader';

export interface AddrEventPartial {
  'creationTimeUnixSeconds'?: (number | string | Long);
  'addr'?: (_tarorpc_AddrPartial | null);
  'status'?: (_tarorpc_AddrEventStatus | keyof typeof _tarorpc_AddrEventStatus);
  'outpoint'?: (string);
  'utxoAmtSat'?: (number | string | Long);
  'taprootSibling'?: (Buffer | Uint8Array | string);
  'confirmationHeight'?: (number);
  'hasProof'?: (boolean);
}

export interface AddrEvent {
  'creationTimeUnixSeconds': (string);
  'addr': (_tarorpc_Addr | null);
  'status': (keyof typeof _tarorpc_AddrEventStatus);
  'outpoint': (string);
  'utxoAmtSat': (string);
  'taprootSibling': (Buffer);
  'confirmationHeight': (number);
  'hasProof': (boolean);
}
