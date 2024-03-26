// src/app/store/reducers/notification.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as NotificationActions from '../actions';
import { NotificationState, initialNotificationState } from '../states/notification.state';

export const notificationReducer = createReducer(
  initialNotificationState,

  // Manejar la acción de carga de notificaciones
  on(NotificationActions.loadNotifications, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // Manejar la acción de éxito en la carga de notificaciones
  on(NotificationActions.loadNotificationsSuccess, (state, { notifications }) => ({
    ...state,
    notifications,
    loading: false,
  })),

  // Manejar la acción de error en la carga de notificaciones
  on(NotificationActions.loadNotificationsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Manejar la acción de mostrar mensaje de solicitud de amistad
  on(NotificationActions.showFriendRequestMessage, (state, { message }) => ({
    ...state,
    friendRequestMessage: message,
  })),

  // Manejar la acción de mostrar mensaje de aceptación de solicitud de amistad
  on(NotificationActions.showFriendRequestAcceptedMessage, (state, { message }) => ({
    ...state,
    friendRequestAcceptedMessage: message,
  })),

);

