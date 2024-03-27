import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INotification } from 'src/app/modules/notifications/interfaces/notification.interfaces';
import { loadNotifications } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { selectAllNotifications } from 'src/app/store/selectors/notification.selectors';

@Component({
  selector: 'app-dropdown-notications',
  templateUrl: './dropdown-notications.component.html',
  styleUrls: ['./dropdown-notications.component.css']
})
export class DropdownNoticationsComponent {
  notifications$!: Observable<INotification[]>;


  constructor(private store: Store<AppState>) {
    this.notifications$ = this.store.select(selectAllNotifications);
  }

  ngOnInit(): void {
    // Despacha la acción para cargar las notificaciones
    this.store.dispatch(loadNotifications());

    // Suscríbete al observable de notificaciones y muéstralas en la consola
    this.notifications$.subscribe(notifications => {
      console.log('Notificaciones:', notifications);
    });
  }

}
