import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpisUiModule } from 'opis-ui';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OpisUiModule
  ],
  exports: [
    OpisUiModule
  ]
})
export class SharedModule { }
