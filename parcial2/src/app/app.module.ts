import { NgModule } from '@angular/core';
import { BrowserModule,provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VuelosModule } from './vuelos/vuelos.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VuelosModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
