import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YugiohCard } from '../../models/yugioh-card.model';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.html',
  styleUrl: './card-item.css',
})
export class CardItem {
  @Input({ required: true }) card!: YugiohCard;
  @Input() selected = false;
  @Output() selectedCard = new EventEmitter<YugiohCard>();

  get imageUrl(): string {
    return this.card.card_images[0]?.image_url_small ?? '';
  }
}
