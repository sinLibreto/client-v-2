// En tu archivo reducer (por ejemplo, user.reducer.ts)

import { createReducer, on } from '@ngrx/store';
import { loadAllUsers, loadAllUsersSuccess, loadAllUsersFailure } from '../actions/index';
import { initialUserProfileState, UserState } from '../states/user.states';
import * as UserProfileActions from '../actions';
import { IUser } from 'src/app/modules/auth/interfaces/auth.interface';

export const initialState: UserState = {
  users: [],
  currentPage: 0,
  total: 0,
  loading: false,
  error: null,
  profile: null
};

export interface UserProfileState {
  profile: IUser | null;
  loading: boolean;
  error: string | null;
}


export const userReducer = createReducer(
  initialState,
  on(loadAllUsers, (state) => ({ ...state, loading: true })),
  on(loadAllUsersSuccess, (state, { users, page, total }) => ({
    ...state,
    users,
    currentPage: page,
    total,
    loading: false
  })),
  on(loadAllUsersFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

export const userProfileReducer = createReducer(
  initialUserProfileState,
  on(UserProfileActions.loadUserProfile, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(UserProfileActions.loadUserProfileSuccess, (state, { profile }) => ({
    ...state,
    profile,
    loading: false
  })),
  on(UserProfileActions.loadUserProfileFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
);





