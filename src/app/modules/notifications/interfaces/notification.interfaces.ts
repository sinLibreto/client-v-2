
export interface INotification {
  _id?: string;
  userTo: string;
  userFrom: string;
  sentToFrient: string;
  message: string;
  notificationType: NotificationType;
  entityId: string;
  createdItemId: string;
  comment: string;
  reaction: string;
  post: string;
  imgId: string;
  imgVersion: string;
  gifUrl: string;
  read?: boolean;
  createdAt?: Date;

}

export interface NotificationJobData {
  key?: string;
  toUserId?: string;
  fromUserId?: string;
}

export interface NotificationTemplate {
  username: string;
  message: string;
  header: string;
}
export enum NotificationType {
  FriendRequestSent = "FRIEND_REQUEST_SENT",
  FriendRequestAccepted = "FRIEND_REQUEST_ACCEPTED",
  // Otros tipos de notificaciones pueden ser añadidos aquí
}
export enum NotificationType {
  FriendRequest = 'FriendRequest',
  Comment = 'Comment',
  Reaction = 'Reaction',
  // Agrega otros tipos según sean necesarios
}


export interface Notification {
  _id?: string;
  userTo: string;
  userFrom: string;
  sentToFrient: string; // Suponiendo que es el ID del amigo al que se envió la notificación
  message: string;
  notificationType: NotificationType;
  entityId: string;
  createdItemId: string;
  comment: string;
  reaction: string;
  post: string;
  imgId: string;
  imgVersion: string;
  gifUrl: string;
  read?: boolean;
  createdAt?: Date;
  // Campos para detalles del usuario, suponiendo que estos se cargan por separado o se incluyen en la respuesta
  userName?: string; // Nombre del usuario que generó la notificación
  userImageId?: string; // ID de la imagen del usuario para construir la URL de la imagen
  userImageVersion?: string; // Versión de la imagen del usuario
}
