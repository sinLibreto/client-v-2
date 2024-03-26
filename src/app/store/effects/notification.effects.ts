import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as NotificationActions from '../actions';
import { NotificationService } from 'src/app/modules/notifications/services/notification.service';

@Injectable()
export class NotificationEffects {

  loadNotifications$ = createEffect(() => this.actions$.pipe(
    ofType(NotificationActions.loadNotifications),
    mergeMap(() => this.notificationsService.getNotifications()
      .pipe(
        map(notificationsResponse => NotificationActions.loadNotificationsSuccess({ notifications: notificationsResponse.notifications })),
        catchError(error => of(NotificationActions.loadNotificationsFailure({ error })))
      )
    )
  ));


  constructor(
    private actions$: Actions,
    private notificationsService: NotificationService
  ) {}
}
