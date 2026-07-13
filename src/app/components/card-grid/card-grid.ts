import { Component, input, output } from '@angular/core';
import { YugiohCard } from '../../models/yugioh-card.model';
import { CardItem } from '../card-item/card-item';

@Component({
  selector: 'app-card-grid',
  imports: [CardItem],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css',
})
export class CardGrid {
  cards = input.required<YugiohCard[]>();
  selectedCardId = input<number | undefined>();
  cardSelected = output<YugiohCard>();
}
