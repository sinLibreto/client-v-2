import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { HttpConfigInterceptor } from './core/interceptors/http-config.interceptor';
import { ENV, URL_WS } from './config/config';
import {  StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { appReducers } from './store/app.reducers';
import { EffectsArray } from './store/effects';

const socketConfig:SocketIoConfig ={
  url:URL_WS,options:{}
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    SocketIoModule.forRoot(socketConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: ENV }),
    EffectsModule.forRoot(EffectsArray),
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
