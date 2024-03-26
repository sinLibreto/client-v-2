import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from '../actions';
import { IUserResponse } from 'src/app/modules/user/interfaces/user.interfaces';
import { UserStateService } from 'src/app/modules/user/services/user-state.service';
import { UserService } from 'src/app/modules/user/services/user.service';

@Injectable()
export class UserEffects {
  loadAllUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadAllUsers),
    mergeMap((action) =>
      this.userService.getAllUsers(action.page).pipe(
        map((response: IUserResponse) => {
          // Aquí es donde aseguras pasar solo el arreglo de usuarios
          this.userStateService.updateUsers(response.users);
          // console.log('paso por el efecto',response.users)
          return UserActions.loadAllUsersSuccess({ users: response.users, page: response.page, total: response.total });
        }),
        catchError(error => of(UserActions.loadAllUsersFailure({ error })))
      )
    )
  ));

  loadUserProfile$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.loadUserProfile),
    switchMap((action) =>
      this.userService.getUserProfile(action.userId).pipe(
        map(profile => UserActions.loadUserProfileSuccess({ profile })),
        catchError(error => of(UserActions.loadUserProfileFailure({ error })))
      )
    )
  )
);








  constructor(
    private actions$: Actions,
    private userService: UserService,
    private userStateService: UserStateService
  ) {}
}
