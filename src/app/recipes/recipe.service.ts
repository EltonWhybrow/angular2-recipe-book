import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Recipe } from "./recipe";
import { Ingredient } from "../shared";
import "rxjs/Rx";

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

	private recipes: Recipe[] = [  
	/*http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg*/ 
    new Recipe('Burger Meal', 'Very tasty', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg', [
    	new Ingredient('French fries', 2),
    	new Ingredient('Pork Meat', 1)
    	]),
    new Recipe('Chinese', 'Very Greasy', 'http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/media/shrimplobstersaucess_0.jpgshrimplobstersaucess_0_0.jpg', [
      new Ingredient('Rice', 2),
      new Ingredient('Spring Rolls', 1),
      new Ingredient('Duck Pancakes', 12)
      ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor(private http: Http) { }

  getRecipes() {
  	return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recopebook.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData(){
    return this.http.get('https://recopebook.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        })
  }

}
