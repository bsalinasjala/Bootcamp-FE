import { Component, inject } from '@angular/core';
import { CardDetailStoreService } from '../../services/card-detail-store.service';

@Component({
  selector: 'app-card-effect-page',
  imports: [],
  templateUrl: './card-effect-page.html',
  styleUrl: './card-effect-page.css',
})
export class CardEffectPage {
  readonly detailStore = inject(CardDetailStoreService);
}
