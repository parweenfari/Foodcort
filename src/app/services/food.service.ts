import { Injectable } from '@angular/core';
import {Food} from '../shared/model/Food';
import { sample_foods, sample_tags } from '../data';
import { Tag } from '../shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods
  }
  //search Food
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
  //Get All Tag
  getAllTags():Tag[]{
    return sample_tags
  }
  //Get Food by Tags
  getAllFoodByTag(tag:string):Food[]{
    return tag==="All"? this.getAll():this.getAll().filter(food=> food.tag?.includes(tag));
  }
  //Get Food by ID
  getFoodById(foodId:string){
    return this.getAll().find(food => food.id == foodId)?? new Food();
  }

  
}
