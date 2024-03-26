import { createAction, props } from '@ngrx/store';
import { INotification } from 'src/app/modules/notifications/interfaces/notification.interfaces';

export const loadNotifications = createAction('[Notification] Load Notifications');

export const loadNotificationsSuccess = createAction(
  '[Notification] Load Notifications Success',
  props<{ notifications: INotification[] }>()
);

export const loadNotificationsFailure = createAction(
  '[Notification] Load Notifications Failure',
  props<{ error: any }>()
);

export const sendFriendRequest = createAction(
  '[Notification] Send Friend Request',
  props<{ userId: string }>()
);

export const acceptFriendRequest = createAction(
  '[Notification] Accept Friend Request',
  props<{ requestId: string }>()
);

export const showFriendRequestMessage = createAction(
  '[Notification] Show Friend Request Message',
  props<{ message: string }>()
);

export const showFriendRequestAcceptedMessage = createAction(
  '[Notification] Show Friend Request Accepted Message',
  props<{ message: string }>()
);

