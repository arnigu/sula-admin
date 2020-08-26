import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { OpisCoreModule } from 'opis-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OpisCoreModule.forRoot(environment.connection)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
