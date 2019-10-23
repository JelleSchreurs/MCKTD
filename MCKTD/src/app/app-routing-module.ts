import { NgModule, Component } from '@angular/core';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';

import { AuthGuard } from './_helpers';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CocktailsRecipeComponent } from './cocktails-recipe/cocktails-recipe.component';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'cocktails', component: CocktailsComponent },
    { path: 'mocktails', component: MocktailsComponent },
    { path: 'cocktails/:id', component: CocktailsRecipeComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CocktailsRecipeComponent,
    MocktailsComponent,
    CocktailsComponent]
