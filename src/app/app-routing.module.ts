import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'tools',
    loadChildren: () =>
      import('./tools/tools.module').then((m) => m.ToolsModule),
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then((m) => m.InfoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
