import { createReducer, on } from '@ngrx/store';
import * as WebSocketActions from '../actions/websocket.actions';

export const websocketFeatureKey = 'websocket';

export interface State {
  isConnected: boolean;
}

export const initialState: State = {
  isConnected: false
};

export const websocketReducer = createReducer(
  initialState,
  on(WebSocketActions.connectWebSocket, state => ({ ...state, isConnected: true })),
  on(WebSocketActions.disconnectWebSocket, state => ({ ...state, isConnected: false }))
);
