import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { CardDetail } from './components/card-detail/card-detail';
import { CardGrid } from './components/card-grid/card-grid';
import { SearchBar } from './components/search-bar/search-bar';
import { YugiohCard } from './models/yugioh-card.model';
import { YugiohCardService } from './services/yugioh-card.service';

@Component({
  selector: 'app-root',
  imports: [SearchBar, CardGrid, CardDetail],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly cardService = inject(YugiohCardService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly pageSize = 500;

  searchTerm = signal('');
  cards = signal<YugiohCard[]>([]);
  selectedCard = signal<YugiohCard | null>(null);
  loading = signal(false);
  error = signal('');
  currentPage = signal(1);

  ngOnInit(): void {
    this.loadInitialCards();
  }

  searchCards(term: string): void {
    this.searchTerm.set(term.trim());
    this.currentPage.set(1);
    this.loadCards(term);
  }

  selectCard(card: YugiohCard): void {
    this.selectedCard.set(card);
  }

  clearSelection(): void {
    this.selectedCard.set(null);
  }

  previousPage(): void {
    if (this.currentPage() === 1) {
      return;
    }

    this.currentPage.update((page) => page - 1);
    this.loadCards(this.searchTerm());
  }

  nextPage(): void {
    this.currentPage.update((page) => page + 1);
    this.loadCards(this.searchTerm());
  }

  private loadInitialCards(): void {
    this.setCardsFrom(this.cardService.getInitialCards(this.pageSize, this.offset));
  }

  private loadCards(term: string): void {
    this.setCardsFrom(this.cardService.searchCards(term, this.pageSize, this.offset));
  }

  private get offset(): number {
    return (this.currentPage() - 1) * this.pageSize;
  }

  private setCardsFrom(cardsRequest: Observable<YugiohCard[]>): void {
    this.loading.set(true);
    this.error.set('');

    cardsRequest
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (cards) => {
          this.cards.set(cards);
          this.selectedCard.set(null);
          this.loading.set(false);
        },
        error: () => {
          this.cards.set([]);
          this.selectedCard.set(null);
          this.error.set('No se pudo cargar el catalogo. Intenta de nuevo.');
          this.loading.set(false);
        },
      });
  }
}
