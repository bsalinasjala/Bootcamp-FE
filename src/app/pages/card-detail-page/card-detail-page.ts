import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { YugiohCard } from '../../models/yugioh-card.model';
import { CardDetailStoreService } from '../../services/card-detail-store.service';

@Component({
  selector: 'app-card-detail-page',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './card-detail-page.html',
  styleUrl: './card-detail-page.css',
})
export class CardDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly detailStore = inject(CardDetailStoreService);

  ngOnInit(): void {
    const card = this.route.snapshot.data['card'] as YugiohCard | null;

    if (!card) {
      this.detailStore.setError('No se encontro la carta solicitada.');
      return;
    }

    this.detailStore.setCard(card);
  }
}
