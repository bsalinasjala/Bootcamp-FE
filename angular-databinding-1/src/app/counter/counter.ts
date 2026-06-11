import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <button (click)="updateCount(-1)">-</button>

    <span>{{ count() }}</span>

    <button (click)="updateCount(1)">+</button>
  `,
  styles: `
    button {
      margin: 8px;
      padding: 8px 12px;
      font-size: 18px;
    }

    span {
      font-size: 24px;
      font-weight: bold;
    }
  `
})
export class Counter {
  count = input<number>(0);

  countChange = output<number>();

  updateCount(amount: number) {
    const newValue = this.count() + amount;

    this.countChange.emit(newValue);
  }
}
