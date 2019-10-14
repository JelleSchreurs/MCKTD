import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
<<<<<<< HEAD
import { StartPageComponent } from './start-page/start-page.component';
=======
import { AlertComponent } from './alert/alert.component';
>>>>>>> 586bd913557d782e0199e265971436830d2d43af

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
<<<<<<< HEAD
    StartPageComponent
=======
    AlertComponent
>>>>>>> 586bd913557d782e0199e265971436830d2d43af
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
