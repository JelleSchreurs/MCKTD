import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponent } from './login/login.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    StartPageComponent,
    LoginComponent,
    CocktailsComponent,
    MocktailsComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
