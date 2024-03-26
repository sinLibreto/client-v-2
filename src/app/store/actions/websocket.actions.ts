import { createAction } from '@ngrx/store';

export const connectWebSocket = createAction('[WebSocket] Connect');
export const disconnectWebSocket = createAction('[WebSocket] Disconnect');
