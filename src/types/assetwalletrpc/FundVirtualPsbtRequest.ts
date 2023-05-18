// Original file: protos/assetwallet.proto

import type { TxTemplatePartial as _assetwalletrpc_TxTemplatePartial, TxTemplate as _assetwalletrpc_TxTemplate } from '../assetwalletrpc/TxTemplate';

export interface FundVirtualPsbtRequestPartial {
  'psbt'?: (Buffer | Uint8Array | string);
  'raw'?: (_assetwalletrpc_TxTemplatePartial | null);
  'template'?: "psbt"|"raw";
}

export interface FundVirtualPsbtRequest {
  'psbt'?: (Buffer);
  'raw'?: (_assetwalletrpc_TxTemplate | null);
  'template': "psbt"|"raw";
}
