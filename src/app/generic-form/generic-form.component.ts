import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent {
@Input()
row:any = {};

@Input()
rezim:string = "dodavanje";

@Input()
metadata:any;

@Output()
onDodaj = new EventEmitter<any>();
@Output()
onReset = new EventEmitter<any>();


dodajRow(){
  this.onDodaj.emit({...this.row});
}

ponisti(){
this.onReset.emit();
}

}
