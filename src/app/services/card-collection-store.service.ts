import { Service, signal } from '@angular/core';
import { YugiohCard } from '../models/yugioh-card.model';

@Service()
export class CardCollectionStoreService {
  private readonly collectionStorageKey = 'duelistCollection';

  cards = signal<YugiohCard[]>(this.getStoredCards());

  toggleCard(card: YugiohCard): void {
    if (this.hasCard(card.id)) {
      this.removeCard(card.id);
      return;
    }

    this.addCard(card);
  }

  hasCard(cardId: number): boolean {
    return this.cards().some((card) => card.id === cardId);
  }

  private addCard(card: YugiohCard): void {
    this.cards.update((cards) => {
      const nextCards = [...cards, card];
      this.saveStoredCards(nextCards);
      return nextCards;
    });
  }

  private removeCard(cardId: number): void {
    this.cards.update((cards) => {
      const nextCards = cards.filter((card) => card.id !== cardId);
      this.saveStoredCards(nextCards);
      return nextCards;
    });
  }

  private getStoredCards(): YugiohCard[] {
    if (typeof window === 'undefined') {
      return [];
    }

    const storedCards = window.sessionStorage.getItem(this.collectionStorageKey);

    if (!storedCards) {
      return [];
    }

    try {
      return JSON.parse(storedCards) as YugiohCard[];
    } catch {
      return [];
    }
  }

  private saveStoredCards(cards: YugiohCard[]): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem(this.collectionStorageKey, JSON.stringify(cards));
  }
}
