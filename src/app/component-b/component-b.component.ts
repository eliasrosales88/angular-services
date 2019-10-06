import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list-service/list.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  list: string[];
  constructor(private listService: ListService) { }

  ngOnInit() {

    this.list = this.listService.getItems();
  }

}
