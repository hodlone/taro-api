import Path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./types/taro";
import { TaroClient } from "./types/tarorpc/Taro";
import { ListAssetResponse__Output } from "./types/tarorpc/ListAssetResponse";
import { ListBalancesRequest } from "./types/tarorpc/ListBalancesRequest";
import { ListBalancesResponse__Output } from "./types/tarorpc/ListBalancesResponse";
import { ListGroupsResponse__Output } from "./types/tarorpc/ListGroupsResponse";
import { ListUtxosResponse__Output } from "./types/tarorpc/ListUtxosResponse";
import { MintAssetRequest } from "./types/tarorpc/MintAssetRequest";
import { MintAssetResponse__Output } from "./types/tarorpc/MintAssetResponse";
import { DebugLevelRequest } from "./types/tarorpc/DebugLevelRequest";
import { DebugLevelResponse__Output } from "./types/tarorpc/DebugLevelResponse";
import { StopRequest } from "./types/tarorpc/StopRequest";
import { StopResponse__Output } from "./types/tarorpc/StopResponse";
import { QueryAddrRequest } from "./types/tarorpc/QueryAddrRequest";
import { QueryAddrResponse__Output } from "./types/tarorpc/QueryAddrResponse";
import { Addr__Output } from "./types/tarorpc/Addr";
import { NewAddrRequest } from "./types/tarorpc/NewAddrRequest";
import { DecodeAddrRequest } from "./types/tarorpc/DecodeAddrRequest";
import { AddrReceivesRequest } from "./types/tarorpc/AddrReceivesRequest";
import { AddrReceivesResponse__Output } from "./types/tarorpc/AddrReceivesResponse";
import { ProofFile } from "./types/tarorpc/ProofFile";
import { ProofVerifyResponse__Output } from "./types/tarorpc/ProofVerifyResponse";
import { ImportProofRequest } from "./types/tarorpc/ImportProofRequest";
import { ImportProofResponse__Output } from "./types/tarorpc/ImportProofResponse";
import { SendAssetRequest } from "./types/tarorpc/SendAssetRequest";
import { SendAssetResponse__Output } from "./types/tarorpc/SendAssetResponse";
import { ListTransfersResponse__Output } from "./types/tarorpc/ListTransfersResponse";

/**
 * @TaroClientOptions interface
 */

export default interface TaroClientOptions {

  /**
   * @socket Taro daemon's host and port in `host:port` format.
   */

  socket: string;

  /**
   * @macaroon Taro daemon's macaroon in HEX format.
   */

  macaroon: string;

  /**
   * @cert Taro daemon's TLS certificate in HEX format.
   */

  cert: string;
}

/**
 * @TaroApi API interface for Taro's daemon.
 */

export class TaroApi {
  /**
   * @create Create a new TaroApi instance.
   */

  static create(options: TaroClientOptions) {
    const callCredentials = grpc.credentials.createFromMetadataGenerator(
      (_: any, callback: (arg0: null, arg1: any) => any) => {
        const metadata = new grpc.Metadata();

        metadata.add("macaroon", options.macaroon);

        return callback(null, metadata);
      }
    );

    const channelCredentials = grpc.credentials.createSsl(
      Buffer.from(options.cert, "hex")
    );

    const combinedChannelCredentials =
      grpc.credentials.combineChannelCredentials(
        channelCredentials,
        callCredentials
      );

    const params = {
      "grpc.max_receive_message_length": -1,
      "grpc.max_send_message_length": -1,
    };

    const protoPath = Path.join(__dirname, "../protos", "taro.proto");
    const packageDefinition = protoLoader.loadSync(protoPath);
    const proto = grpc.loadPackageDefinition(
      packageDefinition
    ) as unknown as ProtoGrpcType;

    return new TaroApi(
      new proto.tarorpc.Taro(options.socket, combinedChannelCredentials, params)
    );
  }

  /**
   * @client The grpc client to contact daemon.
   */

  client: TaroClient;

  constructor(client: TaroClient) {
    this.client = client;
  }

  /**
   * @mintAssets MintAsset will attempts to mint the set of assets (async by default to ensure proper batching) specified in the request.
   */

  async mintAssets(
    request: MintAssetRequest
  ): Promise<MintAssetResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.MintAsset(request, (error, response) => {
        if (error) reject(error);

        resolve(<MintAssetResponse__Output>response);
      });
    });
  }

  /**
   * @listAssets ListAssets lists the set of assets owned by the target daemon.
   */

  async listAssets(): Promise<ListAssetResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.ListAssets({}, (error, response) => {
        if (error) reject(error);

        resolve(<ListAssetResponse__Output>response);
      });
    });
  }

  /**
   * @listBalances ListBalances lists asset balances.
   */

  async listBalances(
    request: ListBalancesRequest
  ): Promise<ListBalancesResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.ListBalances(request, (error, response) => {
        if (error) reject(error);

        resolve(<ListBalancesResponse__Output>response);
      });
    });
  }

  /**
   * @listGroups ListGroups lists the asset groups known to
   * the target daemon, and the assets held in each group.
   */

  async listGroups(): Promise<ListGroupsResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.ListGroups({}, (error, response) => {
        if (error) reject(error);

        resolve(<ListGroupsResponse__Output>response);
      });
    });
  }

  /**
   * @listTransfers ListTransfers lists asset transfers.
   */

  async listTransfers(): Promise<ListTransfersResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.ListTransfers({}, (error, response) => {
        if (error) reject(error);

        resolve(<ListTransfersResponse__Output>response);
      });
    });
  }

  /**
   * @listUtxos ListUtxos lists the UTXOs managed by the
   * target daemon, and the assets they hold.
   */

  async listUtxos(): Promise<ListUtxosResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.ListUtxos({}, (error, response) => {
        if (error) reject(error);

        resolve(<ListUtxosResponse__Output>response);
      });
    });
  }

  /**
   * @stopDaemon StopDaemon will send a shutdown request to the interrupt handler, triggering a graceful shutdown of the daemon.
   */

  async stopDaemon(request: StopRequest): Promise<StopResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.StopDaemon(request, (error, response) => {
        if (error) reject(error);

        resolve(<StopResponse__Output>response);
      });
    });
  }

  /**
   * @debugLevel DebugLevel allows a caller to programmatically set the logging verbosity of
    tarod. The logging can be targeted according to a coarse daemon-wide logging
    level, or in a granular fashion to specify the logging for a target
    sub-system.
   */

  async debugLevel(
    request: DebugLevelRequest
  ): Promise<DebugLevelResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.DebugLevel(request, (error, response) => {
        if (error) reject(error);

        resolve(<DebugLevelResponse__Output>response);
      });
    });
  }

  /**
   * @queryAddrs QueryTaroAddrs queries the set of Taro addresses stored in the database.
   */

  async queryAddrs(
    request: QueryAddrRequest
  ): Promise<QueryAddrResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.QueryAddrs(request, (error, response) => {
        if (error) reject(error);

        resolve(<QueryAddrResponse__Output>response);
      });
    });
  }

  /**
   * @newAddr NewAddr makes a new address from the set of request params.
   */

  async newAddr(request: NewAddrRequest): Promise<Addr__Output> {
    return new Promise((resolve, reject) => {
      this.client.NewAddr(request, (error, response) => {
        if (error) reject(error);

        resolve(<Addr__Output>response);
      });
    });
  }

  /**
   * @decodeAddr DecodeAddr decode a Taro address into a partial asset message that represents the asset it wants to receive.
   */

  async decodeAddr(request: DecodeAddrRequest): Promise<Addr__Output> {
    return new Promise((resolve, reject) => {
      this.client.DecodeAddr(request, (error, response) => {
        if (error) reject(error);

        resolve(<Addr__Output>response);
      });
    });
  }

  /**
   * @addrReceives List all receives for incoming asset transfers for addresses that were created previously.
   */

  async addrReceives(
    request: AddrReceivesRequest
  ): Promise<AddrReceivesResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.AddrReceives(request, (error, response) => {
        if (error) reject(error);

        resolve(<AddrReceivesResponse__Output>response);
      });
    });
  }

  /**
   * @verifyProof VerifyProof attempts to verify a given proof file that claims to be anchored at the specified genesis point.
   */

  async verifyProof(request: ProofFile): Promise<ProofVerifyResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.VerifyProof(request, (error, response) => {
        if (error) reject(error);

        resolve(<ProofVerifyResponse__Output>response);
      });
    });
  }

  /**
   * @importProof ImportProof attempts to import a proof file into the daemon. If successful,
    a new asset will be inserted on disk, spendable using the specified target
    script key, and internal key.
   */

  async importProof(
    request: ImportProofRequest
  ): Promise<ImportProofResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.ImportProof(request, (error, response) => {
        if (error) reject(error);

        resolve(<ImportProofResponse__Output>response);
      });
    });
  }

  /**
   * @sendAsset SendAsset uses a passed taro address to attempt to complete an asset send.
    The method returns information w.r.t the on chain send, as well as the
    proof file information the receiver needs to fully receive the asset.
   */

  async sendAsset(
    request: SendAssetRequest
  ): Promise<SendAssetResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.SendAsset(request, (error, response) => {
        if (error) reject(error);

        resolve(<SendAssetResponse__Output>response);
      });
    });
  }
}
