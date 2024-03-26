// password.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import * as PasswordActions from '../actions';
import { PasswordService } from 'src/app/modules/auth/services/password.service';
import { ForgotPasswordResponse } from 'src/app/modules/auth/interfaces/auth.interface';

@Injectable()
export class PasswordEffects {


  forgotPassword$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PasswordActions.forgotPasswordRequest),
    exhaustMap(action =>
      this.passwordService.forgotPassword(action.email).pipe(
        map((response: ForgotPasswordResponse) =>
          PasswordActions.forgotPasswordRequestSuccess({ message: response.message })),
        catchError(error => of(PasswordActions.forgotPasswordRequestFailure({ error: error.message }))) // Asumiendo que 'error' es un objeto con una propiedad 'message'
      )
    )
  )
);

resetPassword$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PasswordActions.resetPasswordRequest),
    exhaustMap(action =>
      this.passwordService.resetPassword(action.token, action.newPassword).pipe(
        map((response: ForgotPasswordResponse) =>
          PasswordActions.resetPasswordRequestSuccess({ message: response.message })),
        catchError(error => of(PasswordActions.resetPasswordRequestFailure({ error: error.message }))) // Asumiendo que 'error' es un objeto con una propiedad 'message'
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private passwordService: PasswordService
  ) {}
}
