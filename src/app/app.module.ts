import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
// import { AuthGuard } from './core/login.guard';
import { AuthGuard } from './core/login.guard';
import { LoginInterceptor } from './core/interceptor/login.interceptor';
import { unauthguard } from './core/interceptor/unauth.guard';
@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    CoreModule,
  


  ],
  providers: [
    AuthGuard,
    unauthguard,
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
