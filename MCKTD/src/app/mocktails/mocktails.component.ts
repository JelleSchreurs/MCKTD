import { Component, OnInit } from '@angular/core';
import { Mocktail } from '../_class/mocktail';
import { MOCKTAILS } from './../_class/mocktail-list';
import { from } from 'rxjs';

@Component({
  selector: 'app-mocktails',
  templateUrl: './mocktails.component.html',
  styleUrls: ['./mocktails.component.css']
})
export class MocktailsComponent implements OnInit {
  title = 'Mocktails';

  mocktails = MOCKTAILS;
  selectedMocktail: Mocktail;

  ngOnInit() {
  }
    onselect(mocktail: Mocktail): void {
      this.selectedMocktail = mocktail;
    }
  }
