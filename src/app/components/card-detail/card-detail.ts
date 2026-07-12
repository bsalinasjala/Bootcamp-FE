import { Component, Input } from '@angular/core';
import { YugiohCard } from '../../models/yugioh-card.model';
import { SectionTab, SectionTabs } from '../section-tabs/section-tabs';

@Component({
  selector: 'app-card-detail',
  imports: [SectionTabs],
  templateUrl: './card-detail.html',
  styleUrl: './card-detail.css',
})
export class CardDetail {
  @Input({ required: true }) card!: YugiohCard;

  get imageUrl(): string {
    return this.card.card_images[0]?.image_url ?? '';
  }

  get price(): string {
    return this.card.card_prices?.[0]?.tcgplayer_price ?? 'N/A';
  }

  get sections(): SectionTab[] {
    return [
      {
        title: 'Efecto',
        content: this.card.desc,
      },
      {
        title: 'Estadisticas',
        content: this.statsText,
      },
      {
        title: 'Precio',
        content: `TCGPlayer: $${this.price}`,
      },
    ];
  }

  private get statsText(): string {
    const parts = [
      `Tipo: ${this.card.humanReadableCardType || this.card.type}`,
      `Raza: ${this.card.race}`,
    ];

    if (this.card.attribute) {
      parts.push(`Atributo: ${this.card.attribute}`);
    }

    if (this.card.level) {
      parts.push(`Nivel: ${this.card.level}`);
    }

    if (this.card.atk !== undefined && this.card.def !== undefined) {
      parts.push(`ATK/${this.card.atk} DEF/${this.card.def}`);
    }

    return parts.join(' | ');
  }
}
