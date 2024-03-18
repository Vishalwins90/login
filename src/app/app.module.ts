import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/guard/login.guard';
// import { LoginInterceptor } from './core/interceptor/login.interceptor';
import { unauthguard } from './core/guard/unauth.guard';
import { ToastrModule } from 'ngx-toastr';
// import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FeatureModule } from './feature/feature.module';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { featureRoutingModule } from './feature/feature-routing.module';
import { ResloveGuard } from './core/guard/reslove.guard';
import { NgOtpInputModule } from 'ng-otp-input';
import { LayoutComponent } from './shared/layout/layout.component';
// import { AuthModule } from './auth/auth.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CKEditorModule } from 'ckeditor4-angular';
import { MatFormFieldModule } from "@angular/material/form-field";
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
      positionClass: 'toast-bottom-right'
    }),
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    featureRoutingModule,
    NgOtpInputModule,
    CommonModule,
    MatAutocompleteModule,
    MatTooltipModule,
    ReactiveFormsModule, MatMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,

    // CKEditorModule

  ],
  providers: [

    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    // MAT_AUTOCOMPLETE_SCROLL_STRATEGY



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
