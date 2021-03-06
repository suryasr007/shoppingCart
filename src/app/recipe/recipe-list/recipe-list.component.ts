import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test-Recipe1', 'Desc of Test-Recipe1', '../../../assets/got1.jpg'),
    new Recipe('Test-Recipe1', 'Desc of Test-Recipe1', '../../../assets/got1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
