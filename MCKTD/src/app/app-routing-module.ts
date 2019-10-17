import { NgModule, Component } from '@angular/core';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { AuthGuard } from './_helpers';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    { path: '', component: StartPageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'cocktails', component: CocktailsComponent },
    { path: 'mocktails', component: MocktailsComponent },

    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
