
import { INotification } from "src/app/modules/notifications/interfaces/notification.interfaces";

export interface NotificationState {
  notifications: INotification[];
  loading: boolean;
  error: string | null;
  friendRequestMessage: string | null; // Mensaje cuando el usuario envía una invitación de amistad
  friendRequestAcceptedMessage: string | null; // Mensaje cuando una invitación de amistad es aceptada
}

export const initialNotificationState: NotificationState = {
  notifications: [],
  loading: false,
  error: null,
  friendRequestMessage: null,
  friendRequestAcceptedMessage: null,
};
