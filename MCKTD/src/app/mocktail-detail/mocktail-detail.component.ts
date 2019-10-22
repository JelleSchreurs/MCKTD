import { Component, OnInit, Input } from '@angular/core';
import { Mocktail } from '../_class/mocktail';

@Component({
  selector: 'app-mocktail-detail',
  templateUrl: './mocktail-detail.component.html',
  styleUrls: ['./mocktail-detail.component.css']
})
export class MocktailDetailComponent implements OnInit {
@Input() mocktail: Mocktail;

  constructor() { }

  ngOnInit() {
  }

}
