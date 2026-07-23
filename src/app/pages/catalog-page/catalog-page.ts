import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CardGrid } from '../../components/card-grid/card-grid';
import { SearchBar } from '../../components/search-bar/search-bar';
import { YugiohCard } from '../../models/yugioh-card.model';
import { YugiohCardStoreService } from '../../services/yugioh-card-store.service';

@Component({
  selector: 'app-catalog-page',
  imports: [SearchBar, CardGrid, RouterLink],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css',
})
export class CatalogPage implements OnInit {
  readonly cardStore = inject(YugiohCardStoreService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.cardStore.loadInitialCards();
  }

  openCard(card: YugiohCard): void {
    this.router.navigate(['/cards', card.id]);
  }
}
