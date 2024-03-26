import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { DropdownNotificacionComponent } from './pages/dropdown-notificacion/dropdown-notificacion.component';


@NgModule({
  declarations: [
    DropdownNotificacionComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
