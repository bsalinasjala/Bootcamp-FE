import { Injectable } from '@angular/core';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  getRecipes(): RecipeModel[] {
    return MOCK_RECIPES;
  }

  getRecipeById(id: number): RecipeModel | undefined {
    return MOCK_RECIPES.find((recipe) => recipe.id === id);
  }

  addRecipe(recipeData: Partial<RecipeModel>): void {
    const newRecipe: RecipeModel = {
      id: MOCK_RECIPES.length + 1,
      name: recipeData.name ?? '',
      description: recipeData.description ?? '',
      imgUrl: recipeData.imgUrl ?? '',
      isFavorite: false,
      ingredients: [],
    };

    MOCK_RECIPES.push(newRecipe);
  }
}