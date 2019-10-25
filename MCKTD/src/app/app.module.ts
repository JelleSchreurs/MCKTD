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

import { FileSelectDirective } from 'ng2-file-upload';
import { CocktailsRecipeComponent } from './cocktails-recipe/cocktails-recipe.component';
import { MocktailsRecipeComponent } from './mocktails-recipe/mocktails-recipe.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './shared/api.service';
import { TokenInterceptor } from './_helpers/interceptor';

import { AddUserComponent } from './user-profile/add-user/add-user.component';
import { EditUserComponent } from './user-profile/edit-user/edit-user.component';
import { ListUserComponent } from './user-profile/list-user/list-user.component';
import { CocktailFormComponent } from './cocktail-form/cocktail-form.component';
import { MocktailFormComponent } from './mocktail-form/mocktail-form.component';



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
    FileSelectDirective,
    CocktailsRecipeComponent,
    MocktailsRecipeComponent,
    ContactComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    CocktailFormComponent,
    MocktailFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
