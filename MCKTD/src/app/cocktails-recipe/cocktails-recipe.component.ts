import { Component, OnInit, EventEmitter } from '@angular/core';

import { Cocktail } from './../_class/cocktails-module';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from '../_services/cocktails.service';

@Component({
  selector: 'app-cocktails-recipe',
  templateUrl: './cocktails-recipe.component.html',
  styleUrls: ['./cocktails-recipe.component.scss'],

})
export class CocktailsRecipeComponent implements OnInit {

  public cocktail: Cocktail;

  constructor(private route: ActivatedRoute,
    private cocktailsService: CocktailsService,
    private location: Location, ) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    const id = +this.route.snapshot.params['id'];
    this.cocktail = this.cocktailsService.getCocktailsbyid(id);
  }

  goBack(): void {
    this.location.back();
  }

}
