import { AssetWalletApi } from './assetWalletApi';
import { MintApi } from './mintApi';
import { TaroApi } from './taroApi';
import { UniverseApi } from './universeApi';

/**
 * @TaroClientOptions interface
 */

export interface TaroClientOptions {
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
 * @TaroRpcApis The Taro RPC APIs.
 */
export interface TaroRpcApis {
  taro: TaroApi;
  mint: MintApi;
  assetWallet: AssetWalletApi;
  universe: UniverseApi;
}

export class TaroClient {
  /**
   * @create Create instances of all Taro RPC APIs.
   */

  static create(options: TaroClientOptions): TaroRpcApis {
    return {
      taro: TaroApi.create(options),
      mint: MintApi.create(options),
      assetWallet: AssetWalletApi.create(options),
      universe: UniverseApi.create(options),
    };
  }
}

export { TaroApi, MintApi, AssetWalletApi, UniverseApi };
export * from './types';
