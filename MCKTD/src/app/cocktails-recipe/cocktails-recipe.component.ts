import { Component, OnInit } from '@angular/core';

import { COCKTAILS } from './../_class/cocktails-list';
import { Cocktail } from './../_class/cocktails-module';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from './../cocktails.service';
@Component({
  selector: 'app-cocktails-recipe',
  templateUrl: './cocktails-recipe.component.html',
  styleUrls: ['./cocktails-recipe.component.css']
})
export class CocktailsRecipeComponent implements OnInit {
  cocktail = Cocktail;

  constructor(private router: ActivatedRoute,
    private location: Location,
    private cocktailsService: CocktailsService) { }

  ngOnInit(): void {
    // this.getCocktail();
  }
  // getCocktail() {
  // const id = +this.router.snapshot.paramMap.get('id');
  // this.cocktailsService.getCocktail().subscribe(cocktail => this.cocktail = cocktail)
  //}

  goBack(): void {
    this.location.back();
  }
}
