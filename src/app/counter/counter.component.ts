import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  wordsCount = 0;

  @Input()
  message: string = '';

  @Output()
  action = new EventEmitter();

  handleClick() {
    this.wordsCount = this.message.split(' ').length;
    this.action.emit(this.wordsCount);
  }

  constructor() {
  }
}
