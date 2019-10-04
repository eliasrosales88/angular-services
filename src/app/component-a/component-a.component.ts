import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  @Output() list: EventEmitter<any> = new EventEmitter();
  
  input: string;
  constructor(private listService: ListService) { }

  ngOnInit() {

  }

  onAdd(){
    this.list.emit(this.input);
    
    this.listService.addToList(this.input);
    
    this.input = '';
  }
}
