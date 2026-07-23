import { Service, inject, signal } from '@angular/core';
import { YugiohCard } from '../models/yugioh-card.model';
import { YugiohCardService } from './yugioh-card.service';

@Service()
export class CardDetailStoreService {
  private readonly cardService = inject(YugiohCardService);

  card = signal<YugiohCard | null>(null);
  loading = signal(false);
  error = signal('');

  setCard(card: YugiohCard): void {
    this.card.set(card);
    this.error.set('');
    this.loading.set(false);
  }

  setError(message: string): void {
    this.card.set(null);
    this.error.set(message);
    this.loading.set(false);
  }

  loadCard(id: string): void {
    this.loading.set(true);
    this.error.set('');
    this.card.set(null);

    this.cardService.getCardById(id).subscribe({
      next: (card) => {
        this.card.set(card);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudo cargar la carta solicitada.');
        this.loading.set(false);
      },
    });
  }
}
