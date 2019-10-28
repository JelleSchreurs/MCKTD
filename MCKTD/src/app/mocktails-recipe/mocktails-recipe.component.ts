import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Mocktail } from './../_class/mocktails-module';
import { MocktailsService } from '../_services/mocktails.service';

@Component({
  selector: 'app-mocktails-recipe',
  templateUrl: './mocktails-recipe.component.html',
  styleUrls: ['./mocktails-recipe.component.scss']
})
export class MocktailsRecipeComponent implements OnInit {
  public mocktail: Mocktail;

  constructor(private route: ActivatedRoute,
              private mocktailsService: MocktailsService,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.mocktail = this.mocktailsService.getMocktailsbyid(id);
    console.log(this.mocktail, id);
  }

  goBack(): void {
    this.location.back();
  }
}
