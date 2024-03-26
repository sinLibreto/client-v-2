import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  private baseUrl = `http://localhost:5000/api/v1/notification`; // Asegúrate de definir 'apiUrl' en tu archivo de entorno

  constructor(
    private http: HttpClient
    ) {}

  // Obtener notificaciones
  getNotifications(): Observable<any> {
    return this.http.get(`http://localhost:5000/api/v1/notifications`);
  }

  // Actualizar una notificación
  updateNotification(notificationId: string, payload: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${notificationId}`, payload);
  }

  // Eliminar una notificación
  deleteNotification(notificationId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${notificationId}`);
  }

  getAllNotificationsSinCode(): Observable<Notification[]> {
    // Este es un ejemplo, reemplázalo con tu llamada HTTP real
    return of(
      [
        { _id: '1', message: 'Test notification 1' } as unknown as Notification,
        { _id: '2', message: 'Test notification 2' } as unknown as Notification,
        { _id: '3', message: 'Test notification 3' } as unknown as Notification,
      ]
      );
  }
}
