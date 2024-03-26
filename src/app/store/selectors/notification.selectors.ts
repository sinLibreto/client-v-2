// src/app/store/selectors/notification.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { NotificationState } from '../states/notification.state';

export const selectNotificationState = createFeatureSelector<NotificationState>('notifications');

export const selectAllNotifications = createSelector(
  selectNotificationState,
  (state: NotificationState) => state.notifications
);

export const selectUnreadNotifications = createSelector(
  selectAllNotifications,
  notifications => notifications.filter(notification => !notification.read)
);

// export const selectRecentNotifications = createSelector(
//   selectAllNotifications,
//   notifications => notifications.filter(notification => {
//     const oneWeekAgo = new Date();
//     oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
//     return new Date(notification.createdAt) >= oneWeekAgo;
//   })
// );

// Puedes crear más selectores según necesites para filtrar o seleccionar notificaciones específicas
