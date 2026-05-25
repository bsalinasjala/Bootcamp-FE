import { Component, signal } from '@angular/core';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal<string>('My Recipe Box');
  protected readonly recipes = MOCK_RECIPES;
  protected readonly selectedRecipe = signal<RecipeModel>(this.recipes[0]);
  protected readonly servings = signal<number>(1);

  protected selectRecipe(recipe: RecipeModel): void {
    this.selectedRecipe.set(recipe);
  }
  protected increaseServings(): void {
    this.servings.update(current => current + 1);
  }

  protected decreaseServings(): void {
    this.servings.update(current => current - 1);
  }

  protected logInfo(): void {
    console.log("Info button clicked!")
  }

  protected logWarning(): void {
    console.log("Warning button clicked!")
  }
}
