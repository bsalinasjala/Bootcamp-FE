import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Recipe } from '../recipe';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-recipe-list',
  imports: [FormsModule, RouterLink, MatButtonModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  private readonly recipeService = inject(Recipe);

  protected readonly recipes = this.recipeService.getRecipes();

  protected readonly searchTerm = signal<string>('');

  protected readonly filteredRecipes = computed(() =>
    this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );
}