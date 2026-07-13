import { Component, OnInit, inject } from '@angular/core';
import { CardDetail } from './components/card-detail/card-detail';
import { CardGrid } from './components/card-grid/card-grid';
import { SearchBar } from './components/search-bar/search-bar';
import { YugiohCardStoreService } from './services/yugioh-card-store.service';

@Component({
  selector: 'app-root',
  imports: [SearchBar, CardGrid, CardDetail],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  readonly cardStore = inject(YugiohCardStoreService);

  ngOnInit(): void {
    this.cardStore.loadInitialCards();
  }
}
