import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),

  },
  {
    path: 'tools',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./tools/tools.module').then((m) => m.ToolsModule),
  },
  {
    path: 'info',
    canActivate: [AuthGuard],
    loadChildren: () => import('./info/info.module').then((m) => m.InfoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
