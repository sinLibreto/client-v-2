import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule,
    ),
  },
  // {
  //   path: 'user',
  //   loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
  // },
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.module').then((m) => m.SettingsModule),
    // data: { layout: 'light-sidebar' },
  },
  {
    path: 'post',
    loadChildren: () => import('../post/post.module').then((m) => m.PostModule),
    // data: { layout: 'dark-header' },
  },
  // {
  //   path: 'crafted/pages/wizards',
  //   loadChildren: () => import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  //   // data: { layout: 'light-header' },
  // },
  // {
  //   path: 'crafted/widgets',
  //   loadChildren: () => import('../modules/widgets-examples/widgets-examples.module').then((m) => m.WidgetsExamplesModule),
  //   // data: { layout: 'light-header' },
  // },
  // {
  //   path: 'apps/chat',
  //   loadChildren: () => import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  //   // data: { layout: 'light-sidebar' },
  // },
  // {
  //   path: 'apps/users',
  //   loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  // },
  // {
  //   path: 'apps/roles',
  //   loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
  // },
  // {
  //   path: 'apps/permissions',
  //   loadChildren: () => import('./permission/permission.module').then((m) => m.PermissionModule),
  // },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
