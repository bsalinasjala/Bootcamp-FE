import { Component, inject } from '@angular/core';
import { CardPricePipe } from '../../pipes/card-price.pipe';
import { CardDetailStoreService } from '../../services/card-detail-store.service';

@Component({
  selector: 'app-card-price-page',
  imports: [CardPricePipe],
  templateUrl: './card-price-page.html',
  styleUrl: './card-price-page.css',
})
export class CardPricePage {
  readonly detailStore = inject(CardDetailStoreService);
}
