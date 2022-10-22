// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetOutput {
  'anchorPoint'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'newProofBlob'?: (Buffer | Uint8Array | string);
  'splitCommitProof'?: (Buffer | Uint8Array | string);
}

export interface AssetOutput__Output {
  'anchorPoint': (string);
  'assetId': (Buffer);
  'scriptKey': (Buffer);
  'amount': (string);
  'newProofBlob': (Buffer);
  'splitCommitProof': (Buffer);
}
