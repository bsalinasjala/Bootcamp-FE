import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-for-test',
  imports: [CommonModule],
  templateUrl: './for-test.html',
  styleUrl: './for-test.css'
})
export class ForTest {
  counter = 0;

  // Example #1: función normal
  users = [
    { id: 1, name: 'Bruno' },
    { id: 2, name: 'Ana' },
    { id: 3, name: 'Luis' }
  ];

  getData() {
    console.count('Example #1 - getData ejecutado');
    return this.users;
  }

  // Example #2: Observable
  users$ = of([
    { id: 1, name: 'Carlos' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Pedro' }
  ]);

  // Example #3: Signal
  usersSignal = signal([
    { id: 1, name: 'Sofia' },
    { id: 2, name: 'Juan' },
    { id: 3, name: 'Lucia' }
  ]);

  testClick() {
    this.counter++;
  }
}