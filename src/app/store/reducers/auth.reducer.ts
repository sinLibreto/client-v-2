import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { initialAuthState } from '../states';

export const authReducer = createReducer(
  initialAuthState,
  // loginStates
  on(AuthActions.loginStart, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  // registerStates
  on(AuthActions.registerStart, (state) => ({ ...state, loading: true })),
  on(AuthActions.registerSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // logoutStates

  // currentUserStates
  on(AuthActions.loadCurrentUserSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    error: null,
  })),
  on(AuthActions.loadCurrentUserFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
