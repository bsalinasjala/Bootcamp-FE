import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YugiohCard } from '../../models/yugioh-card.model';
import { CardItem } from '../card-item/card-item';

@Component({
  selector: 'app-card-grid',
  imports: [CardItem],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css',
})
export class CardGrid {
  @Input({ required: true }) cards: YugiohCard[] = [];
  @Input() selectedCardId?: number;
  @Output() cardSelected = new EventEmitter<YugiohCard>();
}
