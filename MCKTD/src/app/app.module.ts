import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { from } from 'rxjs';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { FileSelectDirective } from 'ng2-file-upload';
import { CocktailsRecipeComponent } from './cocktails-recipe/cocktails-recipe.component';
import { MocktailsRecipeComponent } from './mocktails-recipe/mocktails-recipe.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CocktailsComponent,
    MocktailsComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent,
    UserProfileComponent,
    FileUploadComponent,
    FileSelectDirective,
    CocktailsRecipeComponent,
    MocktailsRecipeComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
