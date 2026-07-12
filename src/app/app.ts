import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { finalize, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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

  searchTerm = signal('');
  cards = signal<YugiohCard[]>([]);
  selectedCard = signal<YugiohCard | null>(null);
  loading = signal(false);
  error = signal('');

  ngOnInit(): void {
    this.loadCards('');
  }

  searchCards(term: string): void {
    this.searchTerm.set(term.trim());
    this.loadCards(term);
  }

  selectCard(card: YugiohCard): void {
    this.selectedCard.set(card);
  }

  clearSelection(): void {
    this.selectedCard.set(null);
  }

  private loadCards(term: string): void {
    this.loading.set(true);
    this.error.set('');

    this.cardService
      .searchCards(term)
      .pipe(
        take(1),
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: (cards) => {
          this.cards.set(cards);
          this.selectedCard.set(cards[0] ?? null);
        },
        error: () => {
          this.cards.set([]);
          this.selectedCard.set(null);
          this.error.set('No se pudo cargar el catalogo. Intenta de nuevo.');
        },
      });
  }
}
