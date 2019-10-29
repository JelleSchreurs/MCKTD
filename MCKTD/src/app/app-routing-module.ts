import { NgModule } from '@angular/core';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './_helpers';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TermsAndCondtionsComponent } from './_components/terms-and-condtions/terms-and-condtions.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { MocktailsRecipeComponent } from './mocktails-recipe/mocktails-recipe.component';
import { CocktailsRecipeComponent } from './cocktails-recipe/cocktails-recipe.component';
import { ContactComponent } from './contact/contact.component';
// import { UpdateProfileComponent } from './user-profile/update-profile/update-profile.component';



const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'forgotPassword', component: ForgotPasswordComponent},
    { path: 'termsAndConditions', component: TermsAndCondtionsComponent},

    { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
           // children: [ {path: 'update-profile', component: UpdateProfileComponent}], canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},

    { path: 'cocktails', component: CocktailsComponent, canActivate: [AuthGuard] },
    { path: 'mocktails', component: MocktailsComponent, canActivate: [AuthGuard] },
    { path: 'cocktails/:id', component: CocktailsRecipeComponent, canActivate: [AuthGuard] },
    { path: 'mocktails/:id', component: MocktailsRecipeComponent, canActivate: [AuthGuard] },

    { path: '**', redirectTo: '' }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CocktailsRecipeComponent,
    MocktailsComponent,
    CocktailsComponent];
