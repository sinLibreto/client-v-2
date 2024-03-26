
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserProfileState, UserState } from '../states';
import { AppState } from '../app.reducers';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectIsLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);


// profile
export const selectUserProfileFeature = (state: AppState) => state.users;


// Selector para el perfil de usuario específico
export const selectUserProfile = createSelector(
  selectUserProfileFeature,
  (state: UserProfileState) => state.profile
);

// Selector para el estado de carga del perfil de usuario
export const selectUserProfileLoading = createSelector(
  selectUserProfileFeature,
  (state: UserProfileState) => state.loading
);

// Selector para el posible error al cargar el perfil de usuario
export const selectUserProfileError = createSelector(
  selectUserProfileFeature,
  (state: UserProfileState) => state.error
);
