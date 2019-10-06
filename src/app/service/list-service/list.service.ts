import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  items = [];
  constructor() { }

  addToList(item) {

    if (item === undefined || item === "") {
      return;
    }
    
    this.items.push(item);

    console.log(this.items);
    
  }

  getItems() {
    return this.items;
  }

  clearList() {
    this.items = [];
    return this.items;
  }
}
