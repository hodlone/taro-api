// Original file: protos/assetwallet.proto

import type { PrevIdPartial as _assetwalletrpc_PrevIdPartial, PrevId as _assetwalletrpc_PrevId } from '../assetwalletrpc/PrevId';
import type { Long } from '@grpc/proto-loader';

export interface TxTemplatePartial {
  'inputs'?: (_assetwalletrpc_PrevIdPartial)[];
  'recipients'?: ({[key: string]: number | string | Long});
}

export interface TxTemplate {
  'inputs': (_assetwalletrpc_PrevId)[];
  'recipients': ({[key: string]: string});
}
