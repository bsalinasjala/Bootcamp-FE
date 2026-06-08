import { Injectable } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  getRecipes(): RecipeModel[] {
    return MOCK_RECIPES;
  }
}
