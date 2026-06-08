import { Component, computed, signal, inject } from '@angular/core';
import { RecipeModel } from '../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})

export class RecipeList {
  protected readonly recipes = inject(Recipe).getRecipes();

  protected readonly selectedRecipe = signal<RecipeModel>(this.recipes[0]);

  protected selectRecipe(recipe: RecipeModel): void {
    this.selectedRecipe.set(recipe);
  }

  protected readonly searchTerm = signal<string>('');
  protected readonly filteredRecipes = computed(() =>
    this.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(this.searchTerm().toLowerCase())));
}