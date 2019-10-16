import { Component, OnInit } from '@angular/core';
import { COCKTAILS } from './../cocktails-list';
import { Cocktail } from './../cocktails-module';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  cocktails = COCKTAILS;
  slecteCocktail: Cocktail;

  constructor() { }

  ngOnInit() {
  }
  onSelect(cocktail: Cocktail): void {
    this.slecteCocktail = cocktail;
  }

}
