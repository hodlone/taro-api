// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface QueryAddrRequestPartial {
  'createdAfter'?: (number | string | Long);
  'createdBefore'?: (number | string | Long);
  'limit'?: (number);
  'offset'?: (number);
}

export interface QueryAddrRequest {
  'createdAfter': (string);
  'createdBefore': (string);
  'limit': (number);
  'offset': (number);
}
