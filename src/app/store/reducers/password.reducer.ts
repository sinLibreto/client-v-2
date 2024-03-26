// password.reducer.ts

import { createReducer, on } from '@ngrx/store';
import * as PasswordActions from '../actions';
import { PasswordState } from '../states';


export const initialPasswordState: PasswordState = {
  passwordResetRequested: false,
  passwordReset: false,
  error: null,
  message: null
};

// export const passwordReducer = createReducer(
//   initialPasswordState,
//   on(PasswordActions.forgotPasswordRequest, state => ({
//     ...state,
//     passwordResetRequested: true,
//     error: null
//   })),
//   on(PasswordActions.forgotPasswordRequestSuccess, state => ({
//     ...state,
//     passwordResetRequested: false
//   })),
//   on(PasswordActions.forgotPasswordRequestFailure, (state, { error }) => ({
//     ...state,
//     passwordResetRequested: false,
//     error
//   })),
//   on(PasswordActions.resetPasswordRequest, state => ({
//     ...state,
//     passwordReset: false,
//     error: null
//   })),
//   on(PasswordActions.resetPasswordRequestSuccess, state => ({
//     ...state,
//     passwordReset: true
//   })),
//   on(PasswordActions.resetPasswordRequestFailure, (state, { error }) => ({
//     ...state,
//     passwordReset: false,
//     error
//   }))
// );


export const passwordReducer = createReducer(
  initialPasswordState,
  on(PasswordActions.forgotPasswordRequest, state => ({
    ...state,
    passwordResetRequested: true,
    error: null,
    message: null // Limpiando el mensaje previo
  })),
  on(PasswordActions.forgotPasswordRequestSuccess, (state, { message }) => ({
    ...state,
    passwordResetRequested: false,
    message // Actualizando el mensaje
  })),
  // Repite la lógica similar para resetPasswordRequest y sus acciones relacionadas
  on(PasswordActions.resetPasswordRequest, state => ({
    ...state,
    passwordReset: false,
    error: null,
    message: null // Limpiando el mensaje previo
  })),
  on(PasswordActions.resetPasswordRequestSuccess, (state, { message }) => ({
    ...state,
    passwordReset: true,
    message // Actualizando el mensaje
  })),
  // En caso de error, puedes optar por manejar también el mensaje, si aplicase
  on(PasswordActions.forgotPasswordRequestFailure, (state, { error }) => ({
    ...state,
    passwordResetRequested: false,
    error,
    message: null // Limpiando o manteniendo el mensaje según necesites
  }))
  // Agrega el manejo para el resto de las acciones según sea necesario
);
