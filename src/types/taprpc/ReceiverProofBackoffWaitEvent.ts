// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface ReceiverProofBackoffWaitEventPartial {
  'timestamp'?: (number | string | Long);
  'backoff'?: (number | string | Long);
  'triesCounter'?: (number | string | Long);
}

export interface ReceiverProofBackoffWaitEvent {
  'timestamp': (string);
  'backoff': (string);
  'triesCounter': (string);
}
