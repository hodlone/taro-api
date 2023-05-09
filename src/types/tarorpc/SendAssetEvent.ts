// Original file: protos/taro.proto

import type { ExecuteSendStateEventPartial as _tarorpc_ExecuteSendStateEventPartial, ExecuteSendStateEvent as _tarorpc_ExecuteSendStateEvent } from '../tarorpc/ExecuteSendStateEvent';
import type { ReceiverProofBackoffWaitEventPartial as _tarorpc_ReceiverProofBackoffWaitEventPartial, ReceiverProofBackoffWaitEvent as _tarorpc_ReceiverProofBackoffWaitEvent } from '../tarorpc/ReceiverProofBackoffWaitEvent';

export interface SendAssetEventPartial {
  'executeSendStateEvent'?: (_tarorpc_ExecuteSendStateEventPartial | null);
  'receiverProofBackoffWaitEvent'?: (_tarorpc_ReceiverProofBackoffWaitEventPartial | null);
  'event'?: "executeSendStateEvent"|"receiverProofBackoffWaitEvent";
}

export interface SendAssetEvent {
  'executeSendStateEvent'?: (_tarorpc_ExecuteSendStateEvent | null);
  'receiverProofBackoffWaitEvent'?: (_tarorpc_ReceiverProofBackoffWaitEvent | null);
  'event': "executeSendStateEvent"|"receiverProofBackoffWaitEvent";
}
