import { Component, OnInit } from '@angular/core';
import { COCKTAILS } from '../_class/cocktails-list';
import { Cocktail } from '../_class/cocktails-module';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  cocktails = COCKTAILS;
  selectedCocktail: Cocktail;

  constructor() { }

  ngOnInit() {
  }
  onSelect(cocktail: Cocktail): void {
    this.selectedCocktail = cocktail;
  }

}
