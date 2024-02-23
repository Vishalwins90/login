import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/guard/login.guard';
// import { LoginInterceptor } from './core/interceptor/login.interceptor';
import { unauthguard } from './core/guard/unauth.guard';
import { ToastrModule } from 'ngx-toastr';
// import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FeatureModule } from './feature/feature.module';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { featureRoutingModule } from './feature/feature-routing.module';
// import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
     HttpClientModule ,
     CoreModule,
     BrowserAnimationsModule,
     FeatureModule,
     featureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
