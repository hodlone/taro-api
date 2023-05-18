import { promisify } from 'util';
import { TapdClientOptions } from './';
import { loadProto } from './proto';
import {
  AnchorVirtualPsbtsRequestPartial,
  AssetWalletClient,
  FundVirtualPsbtRequestPartial,
  FundVirtualPsbtResponse,
  NextInternalKeyRequestPartial,
  NextInternalKeyResponse,
  NextScriptKeyRequestPartial,
  NextScriptKeyResponse,
  SendAssetResponse,
  SignVirtualPsbtRequestPartial,
  SignVirtualPsbtResponse,
} from './types';
import { ProtoGrpcType } from './types/assetwallet';

/**
 * @AssetWalletApi API interface for tapd's AssetWallet RPC sub-server.
 */

export class AssetWalletApi {
  /**
   * @create Create a new AssetWalletApi instance.
   */

  static create(options: TapdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'assetwallet.proto',
      options
    );

    return new AssetWalletApi(
      new proto.assetwalletrpc.AssetWallet(options.socket, credentials, params)
    );
  }

  /**
   * @client The grpc client to contact daemon.
   */

  client: AssetWalletClient;

  constructor(client: AssetWalletClient) {
    this.client = client;
  }

  /**
   * @fundVirtualPsbt FundVirtualPsbt selects inputs from the available asset commitments to fund
   * a virtual transaction matching the template.
   */
  async fundVirtualPsbt(
    request: FundVirtualPsbtRequestPartial = {}
  ): Promise<FundVirtualPsbtResponse> {
    return promisify(this.client.FundVirtualPsbt.bind(this.client))(request);
  }

  /**
   * @signVirtualPsbt SignVirtualPsbt signs the inputs of a virtual transaction and prepares the
   * commitments of the inputs and outputs.
   */
  async signVirtualPsbt(
    request: SignVirtualPsbtRequestPartial = {}
  ): Promise<SignVirtualPsbtResponse> {
    return promisify(this.client.SignVirtualPsbt.bind(this.client))(request);
  }

  /**
   * @anchorVirtualPsbts AnchorVirtualPsbts merges and then commits multiple virtual transactions in
   * a single BTC level anchor transaction.
   */
  async anchorVirtualPsbts(
    request: AnchorVirtualPsbtsRequestPartial = {}
  ): Promise<SendAssetResponse> {
    return promisify(this.client.AnchorVirtualPsbts.bind(this.client))(request);
  }

  /**
   * @nextInternalKey NextInternalKey derives the next internal key for the given key family and
   * stores it as an internal key in the database to make sure it is identified
   * as a local key later on when importing proofs. While an internal key can
   * also be used as the internal key of a script key, it is recommended to use
   * the NextScriptKey RPC instead, to make sure the tweaked Taproot output key
   * is also recognized as a local key.
   */
  async nextInternalKey(
    request: NextInternalKeyRequestPartial = {}
  ): Promise<NextInternalKeyResponse> {
    return promisify(this.client.NextInternalKey.bind(this.client))(request);
  }

  /**
   * @nextScriptKey NextScriptKey derives the next script key (and its corresponding internal
   * key) and stores them both in the database to make sure they are identified
   * as local keys later on when importing proofs.
   */
  async nextScriptKey(
    request: NextScriptKeyRequestPartial = {}
  ): Promise<NextScriptKeyResponse> {
    return promisify(this.client.NextScriptKey.bind(this.client))(request);
  }
}
