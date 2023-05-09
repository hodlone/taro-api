// Original file: protos/taro.proto

import type { ManagedUtxoPartial as _tarorpc_ManagedUtxoPartial, ManagedUtxo as _tarorpc_ManagedUtxo } from '../tarorpc/ManagedUtxo';

export interface ListUtxosResponsePartial {
  'managedUtxos'?: ({[key: string]: _tarorpc_ManagedUtxoPartial});
}

export interface ListUtxosResponse {
  'managedUtxos': ({[key: string]: _tarorpc_ManagedUtxo});
}
