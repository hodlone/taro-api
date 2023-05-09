// Original file: protos/taro.proto

import type { GroupedAssetsPartial as _tarorpc_GroupedAssetsPartial, GroupedAssets as _tarorpc_GroupedAssets } from '../tarorpc/GroupedAssets';

export interface ListGroupsResponsePartial {
  'groups'?: ({[key: string]: _tarorpc_GroupedAssetsPartial});
}

export interface ListGroupsResponse {
  'groups': ({[key: string]: _tarorpc_GroupedAssets});
}
