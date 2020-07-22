import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  items = [];

  constructor() {}

  get_items(){
    return this.items
  }

  remove_item(index){
    this.items.splice(index, 1);
  }

  add_item(item){
    this.items.push(item);
  }

  edit_item(item, index){
    this.items[index] = item;
  }
  
}
