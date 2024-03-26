// Define las acciones para el proceso de restablecimiento de contraseña
import { createAction, props } from '@ngrx/store';

// Acciones para solicitar el restablecimiento de la contraseña
export const forgotPasswordRequest = createAction(
  '[Password] Forgot Password Request',
  props<{ email: string }>()
);

export const forgotPasswordRequestFailure = createAction(
  '[Password] Forgot Password Request Failure',
  props<{ error: string }>()
);

// Acciones para restablecer la contraseña
export const resetPasswordRequest = createAction(
  '[Password] Reset Password Request',
  props<{ token: string; newPassword: string }>()
);



export const resetPasswordRequestFailure = createAction(
  '[Password] Reset Password Request Failure',
  props<{ error: string }>()
);
export const forgotPasswordRequestSuccess = createAction(
  '[Password] Forgot Password Request Success',
  props<{ message: string }>()
);
export const resetPasswordRequestSuccess = createAction(
  '[Password] Reset Password Request Success',
  props<{ message: string }>()
);




export const resetPasswordSuccess = createAction(
  '[Reset Password] Success',
  props<{ message: string }>()
);

export const resetPasswordFailure = createAction(
  '[Reset Password] Failure',
  props<{ error: string }>()
);
