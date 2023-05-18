// Original file: protos/universe.proto

import type { OutpointPartial as _universerpc_OutpointPartial, Outpoint as _universerpc_Outpoint } from '../universerpc/Outpoint';

export interface AssetKeyPartial {
  'opStr'?: (string);
  'op'?: (_universerpc_OutpointPartial | null);
  'scriptKeyBytes'?: (Buffer | Uint8Array | string);
  'scriptKeyStr'?: (string);
  'outpoint'?: "opStr"|"op";
  'scriptKey'?: "scriptKeyBytes"|"scriptKeyStr";
}

export interface AssetKey {
  'opStr'?: (string);
  'op'?: (_universerpc_Outpoint | null);
  'scriptKeyBytes'?: (Buffer);
  'scriptKeyStr'?: (string);
  'outpoint': "opStr"|"op";
  'scriptKey': "scriptKeyBytes"|"scriptKeyStr";
}
