// Original file: protos/assetwallet.proto

import type { ScriptKeyPartial as _tarorpc_ScriptKeyPartial, ScriptKey as _tarorpc_ScriptKey } from '../tarorpc/ScriptKey';

export interface NextScriptKeyResponsePartial {
  'scriptKey'?: (_tarorpc_ScriptKeyPartial | null);
}

export interface NextScriptKeyResponse {
  'scriptKey': (_tarorpc_ScriptKey | null);
}
