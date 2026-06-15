import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeModel } from '../models';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly recipeService = inject(Recipe);

  private readonly recipeId = Number(this.route.snapshot.paramMap.get('id'));

  protected readonly recipe = signal<RecipeModel | undefined>(
    this.recipeService.getRecipeById(this.recipeId)
  );

  protected readonly servings = signal<number>(1);

  protected readonly adjustedIngredients = computed(() =>
    this.recipe()?.ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * this.servings(),
    })) ?? []
  );

  protected increaseServings(): void {
    this.servings.update((current) => current + 1);
  }

  protected decreaseServings(): void {
    this.servings.update((current) => (current > 1 ? current - 1 : 1));
  }
}