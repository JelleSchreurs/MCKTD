import { NgModule, Component } from '@angular/core';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

const routes: Routes = [
    { path: 'cocktails', component: CocktailsComponent },
    { path: 'mocktails', component: MocktailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }