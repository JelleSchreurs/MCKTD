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

  cocktails = COCKTAILS;
  // selectedCocktail: Cocktail;

  constructor(private router: Router) { }

  ngOnInit() {

  }
  onSelect(cocktail) {
    this.router.navigate(['/cocktails', cocktail.id])

  }


}
