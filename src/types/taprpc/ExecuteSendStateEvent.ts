// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface ExecuteSendStateEventPartial {
  'timestamp'?: (number | string | Long);
  'sendState'?: (string);
}

export interface ExecuteSendStateEvent {
  'timestamp': (string);
  'sendState': (string);
}
