import { promisify } from 'util';
import { TapdClientOptions } from './';
import { loadProto } from './proto';
import {
  AddFederationServerRequestPartial,
  AddFederationServerResponse,
  AssetLeafKeyResponse,
  AssetLeafResponse,
  AssetRootQueryPartial,
  AssetRootRequestPartial,
  AssetRootResponse,
  DeleteFederationServerRequestPartial,
  DeleteFederationServerResponse,
  IDPartial,
  IssuanceProofPartial,
  IssuanceProofResponse,
  ListFederationServersRequestPartial,
  ListFederationServersResponse,
  QueryRootResponse,
  SyncRequestPartial,
  SyncResponse,
  UniverseClient,
  UniverseKeyPartial,
} from './types';
import { ProtoGrpcType } from './types/universe';

/**
 * @UniverseApi API interface for tapd's Universe RPC sub-server.
 */

export class UniverseApi {
  /**
   * @create Create a new UniverseApi instance.
   */

  static create(options: TapdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'universe.proto',
      options
    );

    return new UniverseApi(
      new proto.universerpc.Universe(options.socket, credentials, params)
    );
  }

  /**
   * @client The grpc client to contact daemon.
   */

  client: UniverseClient;

  constructor(client: UniverseClient) {
    this.client = client;
  }

  /**
   * @assetRoots AssetRoots queries for the known Universe roots associated with each known
   * asset. These roots represent the supply/audit state for each known asset.
   */

  async assetRoots(
    request: AssetRootRequestPartial = {}
  ): Promise<AssetRootResponse> {
    return promisify(this.client.AssetRoots.bind(this.client))(request);
  }

  /**
   * @queryAssetRoots QueryAssetRoots attempts to locate the current Universe root for a specific
   * asset. This asset can be identified by its asset ID or group key.
   */

  async queryAssetRoots(
    request: AssetRootQueryPartial = {}
  ): Promise<QueryRootResponse> {
    return promisify(this.client.QueryAssetRoots.bind(this.client))(request);
  }

  /**
   * @assetLeafKeys AssetLeafKeys queries for the set of Universe keys associated with a given
   * asset_id or group_key. Each key takes the form: (outpoint, script_key),
   * where outpoint is an outpoint in the Bitcoin blockcahin that anchors a
   * valid Taproot asset commitment, and script_key is the script_key of the asset
   * within the Taptoot asset commitment for the given asset_id or group_key.
   */

  async assetLeafKeys(request: IDPartial = {}): Promise<AssetLeafKeyResponse> {
    return promisify(this.client.AssetLeafKeys.bind(this.client))(request);
  }

  /**
   * @assetLeaves AssetLeaves queries for the set of asset leaves (the values in the Universe
   * MS-SMT tree) for a given asset_id or group_key. These represents either
   * asset issuance events (they have a genesis witness) or asset transfers that
   * took place on chain. The leaves contain a normal Taproot asset proof, as well
   * as details for the asset.
   */
  async assetLeaves(request: IDPartial = {}): Promise<AssetLeafResponse> {
    return promisify(this.client.AssetLeaves.bind(this.client))(request);
  }

  /**
   * @queryProof QueryProof attempts to query for an issuance or transfer proof for a given
   * asset based on its UniverseKey. A UniverseKey is composed of the Universe
   * ID (asset_id/group_key) and also a leaf key (outpoint || script_key). If
   * found, then the issuance proof is returned that includes an inclusion proof
   * to the known Universe root, as well as a Taproot Asset state transition or
   * issuance proof for the said asset.
   */

  async queryProof(
    request: UniverseKeyPartial = {}
  ): Promise<IssuanceProofResponse> {
    return promisify(this.client.QueryProof.bind(this.client))(request);
  }

  /**
   * @insertProof InsertProof attempts to insert a new issuance or transfer proof into the
   * Universe tree specified by the UniverseKey. If valid, then the proof is
   * inserted into the database, with a new Universe root returned for the
   * updated asset_id/group_key.
   */

  async insertProof(
    request: IssuanceProofPartial = {}
  ): Promise<IssuanceProofResponse> {
    return promisify(this.client.InsertProof.bind(this.client))(request);
  }

  /**
   * @syncUniverse SyncUniverse takes host information for a remote Universe server, then
   * attempts to synchronize either only the set of specified asset_ids, or all
   * assets if none are specified. The sync process will attempt to query for
   * the latest known root for each asset, performing tree based reconciliation
   * to arrive at a new shared root.
   */

  async syncUniverse(request: SyncRequestPartial = {}): Promise<SyncResponse> {
    return promisify(this.client.SyncUniverse.bind(this.client))(request);
  }

  /**
   * @listFederationServers ListFederationServers lists the set of servers that make up the federation
   * of the local Universe server. This servers are used to push out new proofs,
   * and also periodically call sync new proofs from the remote server.
   */

  async listFederationServers(
    request: ListFederationServersRequestPartial = {}
  ): Promise<ListFederationServersResponse> {
    return promisify(this.client.ListFederationServers.bind(this.client))(
      request
    );
  }

  /**
   * @addFederationServer AddFederationServer adds a new server to the federation of the local
   * Universe server. Once a server is added, this call can also optionally be
   * used to trigger a sync of the remote server.
   */

  async addFederationServer(
    request: AddFederationServerRequestPartial = {}
  ): Promise<AddFederationServerResponse> {
    return promisify(this.client.AddFederationServer.bind(this.client))(
      request
    );
  }

  /**
   * @deleteFederationServer DeleteFederationServer removes a server from the federation of the local
   * Universe server.
   */

  async deleteFederationServer(
    request: DeleteFederationServerRequestPartial = {}
  ): Promise<DeleteFederationServerResponse> {
    return promisify(this.client.DeleteFederationServer.bind(this.client))(
      request
    );
  }
}
