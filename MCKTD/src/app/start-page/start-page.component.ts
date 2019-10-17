import { Component, OnInit } from '@angular/core';

import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private router: Router) { }

  ButtonClickCocktails(): void {
    this.router.navigate(['/cocktails']);
  }
  ButtonClickMocktails(): void {
    this.router.navigate(['/mocktails']);
  }


  ngOnInit() { }

}
