import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktailsRecipeComponent } from './mocktails-recipe.component';

describe('MocktailsRecipeComponent', () => {
  let component: MocktailsRecipeComponent;
  let fixture: ComponentFixture<MocktailsRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocktailsRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktailsRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
