// src/app/state/actions/auth/auth.actions.ts

import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/modules/auth/interfaces/auth.interface';
import { UserModel } from 'src/app/modules/auth/models/user.model';



export const verifyToken = createAction(
  '[Auth] Verify Token',
  props<{ token: string }>()
);


export const register = createAction(
  '[Auth] Register',
  props<{ username: string; email: string; password: string }>()
);



export const fetchCurrentUser = createAction('[Auth] Fetch Current User');

export const fetchCurrentUserSuccess = createAction(
  '[Auth] Fetch Current User Success',
  (user: any) => {
    // console.log('fetchCurrentUserSuccess action', user);
    return  user ;
  }
);

export const fetchCurrentUserFailure = createAction(
  '[Auth] Fetch Current User Failure',
  (error: any) => {
    console.log('fetchCurrentUserFailure action', error);
    return { error };
  }
);


// new



export const loginStart  = createAction('[Login Page] Login', props<{ username: string; password: string }>());
export const loginSuccess = createAction('[Auth API] Login Success', props<{ user: IUser }>());
export const loginFailure = createAction('[Auth API] Login Failure', props<{ error: string }>());


export const loadCurrentUser = createAction('[Auth] Load Current User');

export const loadCurrentUserSuccess = createAction(
  '[Auth] Load Current User Success',
  props<{ user: any; token: string }>()
);

export const loadCurrentUserFailure = createAction(
  '[Auth] Load Current User Failure',
  props<{ error: any }>()
);


// registro

export const registerStart = createAction('[Register Page] Register Start', props<{ user: UserModel }>());
export const registerSuccess = createAction('[Auth API] Register Success', props<{ user: IUser }>());
export const registerFailure = createAction('[Auth API] Register Failure', props<{ error: string }>());



