import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms'; /* data driven form!! */

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start.component';
import { recipesRouting } from './recipes.routing';
import { SharedModule } from "../shared/shared.module";/*example of shared module */

@NgModule({
	declarations:	[
		RecipesComponent,
		RecipeStartComponent,
		RecipeListComponent,
		RecipeItemComponent,
		RecipeDetailComponent,
		RecipeEditComponent
	
		],
	imports: [SharedModule, ReactiveFormsModule, recipesRouting]
})

export class RecipesModule {}