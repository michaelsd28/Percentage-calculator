import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-template',
  templateUrl: './input-template.component.html',
  styleUrls: ['./input-template.component.css']
})
export class InputTemplateComponent {
@Input() placeHolder!: string;
number: number | string = "";
@Output() inputChanged = new EventEmitter<number | string>();
@Output() setNumber = new EventEmitter<number | string>();


onKeyDown() {
  this.setNumber.emit(this.number);
  this.inputChanged.emit(this.number);

}

}
