import { Component, input } from '@angular/core';
import { YugiohCard } from '../../models/yugioh-card.model';
import { SectionTab, SectionTabs } from '../section-tabs/section-tabs';

@Component({
  selector: 'app-card-detail',
  imports: [SectionTabs],
  templateUrl: './card-detail.html',
  styleUrl: './card-detail.css',
})
export class CardDetail {
  card = input.required<YugiohCard>();

  get imageUrl(): string {
    return this.card().card_images[0]?.image_url ?? '';
  }

  get price(): string {
    return this.card().card_prices?.[0]?.tcgplayer_price ?? 'N/A';
  }

  get sections(): SectionTab[] {
    const card = this.card();

    return [
      {
        title: 'Efecto',
        content: card.desc,
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
    const card = this.card();
    const parts = [
      `Tipo: ${card.humanReadableCardType || card.type}`,
      `Raza: ${card.race}`,
    ];

    if (card.attribute) {
      parts.push(`Atributo: ${card.attribute}`);
    }

    if (card.level) {
      parts.push(`Nivel: ${card.level}`);
    }

    if (card.atk !== undefined && card.def !== undefined) {
      parts.push(`ATK/${card.atk} DEF/${card.def}`);
    }

    return parts.join(' | ');
  }
}
