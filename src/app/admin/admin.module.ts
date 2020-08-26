import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SettingsComponent } from './settings/settings.component';
import { ListsComponent } from './lists/lists.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [AdminComponent, SettingsComponent, ListsComponent, UsersComponent, CategoriesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
