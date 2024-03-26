import { ActionReducerMap } from '@ngrx/store';
import { AuthState, NotificationState, PasswordState, UserState} from './states';
import { authReducer } from './reducers/auth.reducer';
import { userReducer } from './reducers/users.reducer';
import { notificationReducer } from './reducers/notification.reducer';
import { passwordReducer } from './reducers/password.reducer';


export interface AppState {
  auth: AuthState;
  users: UserState;
  notificaciones: NotificationState;
  password:PasswordState


}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  users: userReducer,
  notificaciones: notificationReducer,
  password: passwordReducer
};
