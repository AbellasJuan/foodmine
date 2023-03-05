import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      //O console será mantido como objeto de estudo;
      console.log('params:', params, 'noPropertyAccessFromIndexSignature:', params['searchTerm'], (params.searchTerm));
      if(params['searchTerm']){
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }else{
        this.foods = this.foodService.getAll();
      }
    })
  }
};
