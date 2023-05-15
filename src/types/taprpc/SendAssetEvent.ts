// Original file: protos/taprootassets.proto

import type { ExecuteSendStateEventPartial as _taprpc_ExecuteSendStateEventPartial, ExecuteSendStateEvent as _taprpc_ExecuteSendStateEvent } from '../taprpc/ExecuteSendStateEvent';
import type { ReceiverProofBackoffWaitEventPartial as _taprpc_ReceiverProofBackoffWaitEventPartial, ReceiverProofBackoffWaitEvent as _taprpc_ReceiverProofBackoffWaitEvent } from '../taprpc/ReceiverProofBackoffWaitEvent';

export interface SendAssetEventPartial {
  'executeSendStateEvent'?: (_taprpc_ExecuteSendStateEventPartial | null);
  'receiverProofBackoffWaitEvent'?: (_taprpc_ReceiverProofBackoffWaitEventPartial | null);
  'event'?: "executeSendStateEvent"|"receiverProofBackoffWaitEvent";
}

export interface SendAssetEvent {
  'executeSendStateEvent'?: (_taprpc_ExecuteSendStateEvent | null);
  'receiverProofBackoffWaitEvent'?: (_taprpc_ReceiverProofBackoffWaitEvent | null);
  'event': "executeSendStateEvent"|"receiverProofBackoffWaitEvent";
}
