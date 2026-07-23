import { Component, inject } from '@angular/core';
import { CardDetailStoreService } from '../../services/card-detail-store.service';

@Component({
  selector: 'app-card-stats-page',
  imports: [],
  templateUrl: './card-stats-page.html',
  styleUrl: './card-stats-page.css',
})
export class CardStatsPage {
  readonly detailStore = inject(CardDetailStoreService);
}
