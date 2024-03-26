import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/modules/auth/interfaces/auth.interface";

// Obtener todos los usuarios: /user/all/:page
export const loadAllUsers = createAction(
  '[User Page] Load All Users',
  props<{ page: number }>()
);

export const loadAllUsersSuccess = createAction(
  '[User API] Load All Users Success',
  props<{ users: IUser[], page: number, total: number }>()
);

export const loadAllUsersFailure = createAction(
  '[User API] Load All Users Failure',
  props<{ error: string }>()
);

// user-profile  Obtener el perfil de un usuario: /user/profile


export const loadUserProfile = createAction(
  '[User Profile] Load User Profile',
  props<{ userId: string }>()
);

export const loadUserProfileSuccess = createAction(
  '[User Profile] Load User Profile Success',
  props<{ profile: IUser }>()
);


export const loadUserProfileFailure = createAction(
  '[User Profile] Load User Profile Failure',
  props<{ error: string }>()
);
