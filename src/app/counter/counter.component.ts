import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CustomElementsBase} from '../base/CustomElementsBase';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements CustomElementsBase {

  @Input()
  message: string = '';

  @Output()
  action = new EventEmitter();

  wordsCount = 0;

  handleClick() {
    this.wordsCount = this.message.split(' ').length;
    this.action.emit(this.wordsCount);
  }
}
