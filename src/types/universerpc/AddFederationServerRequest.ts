// Original file: protos/universe.proto

import type { UniverseFederationServerPartial as _universerpc_UniverseFederationServerPartial, UniverseFederationServer as _universerpc_UniverseFederationServer } from '../universerpc/UniverseFederationServer';

export interface AddFederationServerRequestPartial {
  'servers'?: (_universerpc_UniverseFederationServerPartial)[];
}

export interface AddFederationServerRequest {
  'servers': (_universerpc_UniverseFederationServer)[];
}
