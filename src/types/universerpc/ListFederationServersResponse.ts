// Original file: protos/universe.proto

import type { UniverseFederationServerPartial as _universerpc_UniverseFederationServerPartial, UniverseFederationServer as _universerpc_UniverseFederationServer } from '../universerpc/UniverseFederationServer';

export interface ListFederationServersResponsePartial {
  'servers'?: (_universerpc_UniverseFederationServerPartial)[];
}

export interface ListFederationServersResponse {
  'servers': (_universerpc_UniverseFederationServer)[];
}
