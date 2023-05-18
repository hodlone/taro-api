import { promisify } from 'util';
import { TapdClientOptions } from './';
import { loadProto } from './proto';
import {
  Addr,
  AddrReceivesRequestPartial,
  AddrReceivesResponse,
  DebugLevelRequestPartial,
  DebugLevelResponse,
  DecodeAddrRequestPartial,
  ImportProofRequestPartial,
  ImportProofResponse,
  ListAssetRequestPartial,
  ListAssetResponse,
  ListBalancesRequestPartial,
  ListBalancesResponse,
  ListGroupsRequestPartial,
  ListGroupsResponse,
  ListTransfersRequestPartial,
  ListTransfersResponse,
  ListUtxosRequestPartial,
  ListUtxosResponse,
  NewAddrRequestPartial,
  ProofFilePartial,
  ProofVerifyResponse,
  QueryAddrRequestPartial,
  QueryAddrResponse,
  SendAssetRequestPartial,
  SendAssetResponse,
  StopRequestPartial,
  StopResponse,
  TaprootAssetsClient,
} from './types';
import { ProtoGrpcType } from './types/taprootassets';

/**
 * @TaprootAssetsApi API interface for Tap's daemon.
 */

export class TaprootAssetsApi {
  /**
   * @create Create a new TaprootAssetsApi instance.
   */

  static create(options: TapdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'taprootassets.proto',
      options
    );

    return new TaprootAssetsApi(
      new proto.taprpc.TaprootAssets(options.socket, credentials, params)
    );
  }

  /**
   * @client The grpc client to contact daemon.
   */

  client: TaprootAssetsClient;

  constructor(client: TaprootAssetsClient) {
    this.client = client;
  }

  /**
   * @listAssets ListAssets lists the set of assets owned by the target daemon.
   */

  async listAssets(
    request: ListAssetRequestPartial = {}
  ): Promise<ListAssetResponse> {
    return promisify(this.client.ListAssets.bind(this.client))(request);
  }

  /**
   * @listBalances ListBalances lists asset balances.
   */

  async listBalances(
    request: ListBalancesRequestPartial = {}
  ): Promise<ListBalancesResponse> {
    return promisify(this.client.ListBalances.bind(this.client))(request);
  }

  /**
   * @listGroups ListGroups lists the asset groups known to
   * the target daemon, and the assets held in each group.
   */

  async listGroups(
    request: ListGroupsRequestPartial = {}
  ): Promise<ListGroupsResponse> {
    return promisify(this.client.ListGroups.bind(this.client))(request);
  }

  /**
   * @listTransfers ListTransfers lists asset transfers.
   */

  async listTransfers(
    request: ListTransfersRequestPartial = {}
  ): Promise<ListTransfersResponse> {
    return promisify(this.client.ListTransfers.bind(this.client))(request);
  }

  /**
   * @listUtxos ListUtxos lists the UTXOs managed by the
   * target daemon, and the assets they hold.
   */

  async listUtxos(
    request: ListUtxosRequestPartial = {}
  ): Promise<ListUtxosResponse> {
    return promisify(this.client.ListUtxos.bind(this.client))(request);
  }

  /**
   * @stopDaemon StopDaemon will send a shutdown request to the interrupt handler,
   * triggering a graceful shutdown of the daemon.
   */

  async stopDaemon(request: StopRequestPartial = {}): Promise<StopResponse> {
    return promisify(this.client.StopDaemon.bind(this.client))(request);
  }

  /**
   * @debugLevel DebugLevel allows a caller to programmatically set the logging verbosity of
    tarod. The logging can be targeted according to a coarse daemon-wide logging
    level, or in a granular fashion to specify the logging for a target
    sub-system.
   */

  async debugLevel(
    request: DebugLevelRequestPartial = {}
  ): Promise<DebugLevelResponse> {
    return promisify(this.client.DebugLevel.bind(this.client))(request);
  }

  /**
   * @queryAddrs QueryAddrs queries the set of Taproot Asset addresses stored in the database.
   */

  async queryAddrs(
    request: QueryAddrRequestPartial = {}
  ): Promise<QueryAddrResponse> {
    return promisify(this.client.QueryAddrs.bind(this.client))(request);
  }

  /**
   * @newAddr NewAddr makes a new address from the set of request params.
   */

  async newAddr(request: NewAddrRequestPartial = {}): Promise<Addr> {
    return promisify(this.client.NewAddr.bind(this.client))(request);
  }

  /**
   * @decodeAddr DecodeAddr decode a Taproot Assets address into a partial asset message that
   * represents the asset it wants to receive.
   */

  async decodeAddr(request: DecodeAddrRequestPartial = {}): Promise<Addr> {
    return promisify(this.client.DecodeAddr.bind(this.client))(request);
  }

  /**
   * @addrReceives List all receives for incoming asset transfers for addresses
   * that were created previously.
   */

  async addrReceives(
    request: AddrReceivesRequestPartial = {}
  ): Promise<AddrReceivesResponse> {
    return promisify(this.client.AddrReceives.bind(this.client))(request);
  }

  /**
   * @verifyProof VerifyProof attempts to verify a given proof file that claims
   * to be anchored at the specified genesis point.
   */

  async verifyProof(
    request: ProofFilePartial = {}
  ): Promise<ProofVerifyResponse> {
    return promisify(this.client.VerifyProof.bind(this.client))(request);
  }

  /**
   * @importProof ImportProof attempts to import a proof file into the daemon. If successful,
    a new asset will be inserted on disk, spendable using the specified target
    script key, and internal key.
   */

  async importProof(
    request: ImportProofRequestPartial = {}
  ): Promise<ImportProofResponse> {
    return promisify(this.client.ImportProof.bind(this.client))(request);
  }

  /**
   * @sendAsset SendAsset uses a passed taro address to attempt to complete an asset send.
    The method returns information w.r.t the on chain send, as well as the
    proof file information the receiver needs to fully receive the asset.
   */

  async sendAsset(
    request: SendAssetRequestPartial = {}
  ): Promise<SendAssetResponse> {
    return promisify(this.client.SendAsset.bind(this.client))(request);
  }
}
