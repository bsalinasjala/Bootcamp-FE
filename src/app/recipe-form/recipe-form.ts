import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeModel } from '../models';
@Component({
  selector: 'app-recipe-form',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.css',
})
export class RecipeForm {
  private readonly recipeService = inject(Recipe);
  private readonly router = inject(Router);
  protected readonly recipeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    imgUrl: new FormControl('')
  });

  protected onSubmit(): void {
    const newRecipeData = this.recipeForm.value as Partial<RecipeModel>;
    this.recipeService.addRecipe(newRecipeData);
    this.router.navigate(['/recipes']);
  }
}
