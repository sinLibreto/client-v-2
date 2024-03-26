import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarStaticLeftComponent } from './pages/sidebar-static-left/sidebar-static-left.component';
import { FiltrTabsComponent } from './pages/filtr-tabs/filtr-tabs.component';
import { NewTitleComponent } from './pages/new-title/new-title.component';
import { StoryTitleComponent } from './pages/story-title/story-title.component';
import { ChatRoomsComponent } from './pages/chat-rooms/chat-rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarStaticLeftComponent,
    FiltrTabsComponent,
    NewTitleComponent,
    StoryTitleComponent,
    ChatRoomsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
