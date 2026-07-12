import { Component, OnInit, inject, signal } from '@angular/core';
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

    this.cardService.searchCards(term).subscribe({
      next: (cards) => {
        this.cards.set(cards);
        this.selectedCard.set(cards[0] ?? null);
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
