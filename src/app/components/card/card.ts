import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  stars = Array.from({ length: 10 });
  imageUrl = signal<string>('/images/obelisk-the-tormentor.png');
}