import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { UserService } from './modules/user/services/user.service';
import { UserStateService } from './modules/user/services/user-state.service';
import { IUserResponse } from './modules/user/interfaces/user.interfaces'; // Asegúrate de que la ruta sea correcta
import { Store } from '@ngrx/store';
import * as UserActions from './store/actions/index';
import { WsService } from './socket/ws.service';
import { connectWebSocket, disconnectWebSocket } from './store/actions/index';
import * as NotificationActions from './store/actions';
import { NotificationService } from './modules/notifications/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  showHeaderAndNavbar: boolean = true;
  isConnected$!: Observable<boolean>;

  constructor(
    private router: Router,
    private userService: UserService,
    private userStateService: UserStateService,
    private store: Store,
    public _wsockect:WsService,
    private notificationsService: NotificationService

  ) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showHeaderAndNavbar = !event.urlAfterRedirects.startsWith('/auth');
    });
  }
  ngOnInit() {
    const defaultPage = 1;
    this.store.dispatch(UserActions.loadAllUsers({ page: defaultPage }));
    this.loadNotifications();


    this.userService.getAllUsers(defaultPage).subscribe({
      next: (response: IUserResponse) => {
        console.log('response.users',response.users)
        this.userStateService.updateUsers(response.users);
      },
      error: (error) => {
        console.error('Error al obtener usuarios', error);
      }
    });
  }

  connect() {
    this.store.dispatch(connectWebSocket());
  }

  disconnect() {
    this.store.dispatch(disconnectWebSocket());
  }

  loadNotifications(): void {
    this.notificationsService.getAllNotificationsSinCode().subscribe({
      next: (notifications: Notification[]) => {
        console.log('Notificaciones cargadas:', notifications);
        // Aquí podrías despachar una acción para actualizar el estado con las notificaciones cargadas
        // Por ejemplo:
        // this.store.dispatch(NotificationActions.loadNotificationsSuccess({ notifications }));
      },
      error: (error) => console.error('Error al cargar notificaciones', error),
    });
  }


}
