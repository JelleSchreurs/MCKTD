import { Injectable } from '@angular/core';

import { Mocktail } from './_class/mocktails-module';
import { MOCKTAILS } from './_class/mocktail-list';

@Injectable({
  providedIn: 'root'
})
export class MocktailsService {
  _mkt = MOCKTAILS;
  mocktail = Mocktail;

  constructor() { }
  getMocktailsbyid(id: number): Mocktail {
    return this._mkt.find(m => m.id === id);

  }
  getCocktails(): Mocktail[] {
    return this._mkt.slice();
  }
}
