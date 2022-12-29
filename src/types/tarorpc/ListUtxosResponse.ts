// Original file: protos/taro.proto

import type { ManagedUtxo as _tarorpc_ManagedUtxo, ManagedUtxo__Output as _tarorpc_ManagedUtxo__Output } from '../tarorpc/ManagedUtxo';

export interface ListUtxosResponse {
  'managedUtxos'?: ({[key: string]: _tarorpc_ManagedUtxo});
}

export interface ListUtxosResponse__Output {
  'managedUtxos': ({[key: string]: _tarorpc_ManagedUtxo__Output});
}
