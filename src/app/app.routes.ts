import { Routes } from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipeForm } from './recipe-form/recipe-form';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full',
    },
    {
        path: 'recipes',
        component: RecipeList,
    },
    {
        path: 'new-recipe',
        component: RecipeForm,
    },
    {
        path: 'recipes/:id',
        component: RecipeDetail,
    },
];