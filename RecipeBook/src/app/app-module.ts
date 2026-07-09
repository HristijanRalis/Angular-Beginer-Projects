import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeBook } from './recipeBook';
import { HeaderComponent } from './header/header.component';
import { Recipes } from './recipes/recipes';
import { RecipeList } from './recipes/recipe-list/recipe-list';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';
import { RecipeItem } from './recipes/recipe-list/recipe-item/recipe-item';
import { ShoppingList } from './shopping-list/shopping-list';
import { ShoppingEdit } from './shopping-list/shopping-edit/shopping-edit';
import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    RecipeBook,
    Recipes,
    RecipeList,
    RecipeDetail,
    RecipeItem,
    ShoppingList,
    ShoppingEdit,
  ],
  imports: [BrowserModule, HeaderComponent, DropdownDirective],
  providers: [provideBrowserGlobalErrorListeners(), ShoppingListService],
  bootstrap: [RecipeBook],
})
export class AppModule {}
