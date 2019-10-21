import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Cocktail } from './_class/cocktails-module';
import { COCKTAILS } from './_class/cocktails-list';
@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor() { }
  getCocktail() { }
  getCocktails() { }
}
