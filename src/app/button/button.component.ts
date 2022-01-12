import { ButtonChange } from './button-change.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input ('is-cond') condition = false;
  @Output () change = new EventEmitter();
  title="";

  changeClass() {
    this.condition = !this.condition
    this.change.emit({value: true, newValue: this.condition});
  }
}

export interface EventInterface {
  value: boolean,
  newValue: boolean
}
