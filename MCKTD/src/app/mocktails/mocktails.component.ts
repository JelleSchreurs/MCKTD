import { Component, OnInit } from '@angular/core';
import { MOCKTAILS } from './../_class/mocktail-list';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mocktails',
  templateUrl: './mocktails.component.html',
  styleUrls: ['./mocktails.component.scss']
})
export class MocktailsComponent implements OnInit {

  mocktails = MOCKTAILS;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSelect(mocktail) {
    this.router.navigate(['/mocktails', mocktail.id]);
  }

}
