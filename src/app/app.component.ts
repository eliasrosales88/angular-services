import { Component } from '@angular/core';
import { ListService } from './service/list-service/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services';
  list: string[];
  constructor(private listService: ListService){}

  ngOnInit(): void {
    
  }
  
  // Obtenemos el pulso de componente A y actualizamos la lista
  getItem(event){
    console.log(event); 
    this.list = this.listService.getItems();
  }


  

  
}
