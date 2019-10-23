import { Injectable } from '@angular/core';

import { Cocktail } from './_class/cocktails-module';
import { COCKTAILS } from './_class/cocktails-list';
@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  _ckt = COCKTAILS;
  cocktail = Cocktail;
  constructor() { }

  getCocktailsbyid(id: number): Cocktail {
    return this._ckt.find(c => c.id === id);

  }
  getCocktails(): Cocktail[] {
    return this._ckt.slice();
  }
}
