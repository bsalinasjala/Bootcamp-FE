import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CardGrid } from '../../components/card-grid/card-grid';
import { YugiohCard } from '../../models/yugioh-card.model';
import { CardCollectionStoreService } from '../../services/card-collection-store.service';
import { DuelistProfileService } from '../../services/duelist-profile.service';

@Component({
  selector: 'app-collection-page',
  imports: [RouterLink, CardGrid],
  templateUrl: './collection-page.html',
  styleUrl: './collection-page.css',
})
export class CollectionPage {
  readonly profile = inject(DuelistProfileService);
  readonly collectionStore = inject(CardCollectionStoreService);
  private readonly router = inject(Router);

  openCard(card: YugiohCard): void {
    this.router.navigate(['/cards', card.id]);
  }
}
