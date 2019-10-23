import { NgModule } from '@angular/core';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './_helpers';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';




const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user-profile', component: UserProfileComponent},

    { path: 'cocktails', component: CocktailsComponent },
    { path: 'mocktails', component: MocktailsComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }
