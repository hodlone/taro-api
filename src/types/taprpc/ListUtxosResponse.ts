// Original file: protos/taprootassets.proto

import type { ManagedUtxoPartial as _taprpc_ManagedUtxoPartial, ManagedUtxo as _taprpc_ManagedUtxo } from '../taprpc/ManagedUtxo';

export interface ListUtxosResponsePartial {
  'managedUtxos'?: ({[key: string]: _taprpc_ManagedUtxoPartial});
}

export interface ListUtxosResponse {
  'managedUtxos': ({[key: string]: _taprpc_ManagedUtxo});
}
