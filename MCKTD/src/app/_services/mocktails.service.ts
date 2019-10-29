import { Injectable } from '@angular/core';

import { Mocktail } from '../_class/mocktails-module';
import { MOCKTAILS } from '../_class/mocktail-list';

@Injectable({
  providedIn: 'root'
})
export class MocktailsService {
  mkt = MOCKTAILS;
  mocktail = Mocktail;

  constructor() { }
  getMocktailsbyid(id: number): Mocktail {
    return this.mkt.find(m => m.id === id);
  }
  getCocktails(): Mocktail[] {
    return this.mkt.slice();
  }
}
