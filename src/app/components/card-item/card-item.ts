import { Component, input, output } from '@angular/core';
import { CardHighlightDirective } from '../../directives/card-highlight.directive';
import { YugiohCard } from '../../models/yugioh-card.model';

@Component({
  selector: 'app-card-item',
  imports: [CardHighlightDirective],
  templateUrl: './card-item.html',
  styleUrl: './card-item.css',
})
export class CardItem {
  card = input.required<YugiohCard>();
  selected = input(false);
  inCollection = input(false);
  selectedCard = output<YugiohCard>();
  collectionToggled = output<YugiohCard>();

  get artworkUrl(): string {
    const card = this.card();

    return card.card_images[0]?.image_url_cropped ?? card.card_images[0]?.image_url_small ?? '';
  }

  get typeLabel(): string {
    const card = this.card();

    return card.humanReadableCardType || card.type;
  }

  get stars(): unknown[] {
    return Array.from({ length: this.card().level ?? 0 });
  }

  get hasStats(): boolean {
    const card = this.card();

    return card.atk !== undefined || card.def !== undefined;
  }

  onCollectionClick(): void {
    this.collectionToggled.emit(this.card());
  }
}
