import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import Path from 'path';
import { TapdClientOptions } from './';

export const loadProto = <T>(
  protoFileName: string,
  options: TapdClientOptions
): {
  proto: T;
  credentials: grpc.ChannelCredentials;
  params: grpc.ClientOptions;
} => {
  const callCredentials = grpc.credentials.createFromMetadataGenerator(
    (_: any, callback: (arg0: null, arg1: any) => any) => {
      const metadata = new grpc.Metadata();

      metadata.add('macaroon', options.macaroon);

      return callback(null, metadata);
    }
  );

  const channelCredentials = grpc.credentials.createSsl(
    Buffer.from(options.cert, 'hex')
  );

  const credentials = grpc.credentials.combineChannelCredentials(
    channelCredentials,
    callCredentials
  );

  const params = {
    'grpc.max_receive_message_length': -1,
    'grpc.max_send_message_length': -1,
  };

  const protoPath = Path.join(__dirname, '../protos', protoFileName);
  const packageDefinition = protoLoader.loadSync(protoPath, {
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as T;

  return { proto, credentials, params };
};
