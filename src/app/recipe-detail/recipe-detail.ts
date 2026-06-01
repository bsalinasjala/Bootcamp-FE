import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  readonly recipe = input.required<RecipeModel>();

  protected readonly servings = signal<number>(1);

  protected readonly adjustedIngredients = computed(() =>
    this.recipe().ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * this.servings(),
    }))
  );

  protected increaseServings(): void {
    this.servings.update((current) => current + 1);
  }

  protected decreaseServings(): void {
    this.servings.update((current) => (current > 1 ? current - 1 : 1));
  }
}