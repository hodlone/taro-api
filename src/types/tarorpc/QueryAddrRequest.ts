// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface QueryAddrRequest {
  'createdAfter'?: (number | string | Long);
  'createdBefore'?: (number | string | Long);
  'limit'?: (number);
  'offset'?: (number);
}

export interface QueryAddrRequest__Output {
  'createdAfter': (string);
  'createdBefore': (string);
  'limit': (number);
  'offset': (number);
}
