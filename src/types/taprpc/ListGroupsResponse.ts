// Original file: protos/taprootassets.proto

import type { GroupedAssetsPartial as _taprpc_GroupedAssetsPartial, GroupedAssets as _taprpc_GroupedAssets } from '../taprpc/GroupedAssets';

export interface ListGroupsResponsePartial {
  'groups'?: ({[key: string]: _taprpc_GroupedAssetsPartial});
}

export interface ListGroupsResponse {
  'groups': ({[key: string]: _taprpc_GroupedAssets});
}
