import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router // Inyecta el Router de Angular
  ) {}

  register$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.registerStart),
    mergeMap((action) =>
      this.authService.signUp(action.user).pipe(
        map((authResult) => {
          console.log('authResult effecto',authResult)
          return AuthActions.registerSuccess({ user: authResult });
        }),
        catchError((error) => {
          return of(AuthActions.registerFailure({ error: error.message }));
        })
      )
    )
  )
);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginStart),
      mergeMap(action =>
        this.authService.signIn({ username: action.username, password: action.password }).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );



   // Efecto para la navegación después de un registro exitoso
   registerSuccess$ = createEffect(() =>
   this.actions$.pipe(
     ofType(AuthActions.registerSuccess),
     tap(() => this.router.navigateByUrl('/dashboard')) // Navegación al dashboard
   ),
   { dispatch: false }
 );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(() => this.router.navigateByUrl('/dashboard'))
    ),
    { dispatch: false } // No se despacha otra acción después de este efecto
  );


}
