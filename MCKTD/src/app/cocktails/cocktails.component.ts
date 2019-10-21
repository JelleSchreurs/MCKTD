import { Component, OnInit } from '@angular/core';

import { Cocktail } from './../_class/cocktails-module';
import { CocktailsService } from './../cocktails.service';
import { Router } from '@angular/router';
import { COCKTAILS } from './../_class/cocktails-list';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  cocktails: Cocktail[];
  selectedCocktail: Cocktail;
  constructor(/*private cocktailsService: CocktailsService*/) { }
  router: Router[];
  ngOnInit() {
    //this.getCocktails();
  }
  //getCocktails(): void {
  //  this.cocktailsService.getCocktails().subscribe(cocktails => this.cocktails = cocktails);
  // }

  onselect(cocktail: Cocktail): void {
    this.router.navigate(['/cocktailsRecipe', this.selectedCocktail.id]);
  }
}
