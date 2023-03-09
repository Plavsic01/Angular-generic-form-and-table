import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent {

  @Input()
  metadata:any;
  @Input()
  rows:any;
  @Output()
  onAction = new EventEmitter<any>();


  onActionFunc(action:string,index:any,row:any){    
    this.onAction.emit({action,index,row});   
  }

}
