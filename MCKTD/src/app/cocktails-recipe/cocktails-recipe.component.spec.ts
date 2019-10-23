import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsRecipeComponent } from './cocktails-recipe.component';

describe('CocktailsRecipeComponent', () => {
  let component: CocktailsRecipeComponent;
  let fixture: ComponentFixture<CocktailsRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailsRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
