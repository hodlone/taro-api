// Original file: protos/assetwallet.proto

import type { ScriptKeyPartial as _taprpc_ScriptKeyPartial, ScriptKey as _taprpc_ScriptKey } from '../taprpc/ScriptKey';

export interface NextScriptKeyResponsePartial {
  'scriptKey'?: (_taprpc_ScriptKeyPartial | null);
}

export interface NextScriptKeyResponse {
  'scriptKey': (_taprpc_ScriptKey | null);
}
