import { Routes } from '@angular/router';
import { duelistProfileGuard } from './guards/duelist-profile.guard';
import { CardDetailPage } from './pages/card-detail-page/card-detail-page';
import { CardEffectPage } from './pages/card-effect-page/card-effect-page';
import { CardPricePage } from './pages/card-price-page/card-price-page';
import { CardStatsPage } from './pages/card-stats-page/card-stats-page';
import { CatalogPage } from './pages/catalog-page/catalog-page';
import { CollectionPage } from './pages/collection-page/collection-page';
import { DuelistSetupPage } from './pages/duelist-setup-page/duelist-setup-page';
import { cardDetailResolver } from './resolvers/card-detail.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', component: CatalogPage },
  {
    path: 'cards/:id',
    component: CardDetailPage,
    resolve: {
      card: cardDetailResolver,
    },
    children: [
      { path: '', redirectTo: 'effect', pathMatch: 'full' },
      { path: 'effect', component: CardEffectPage },
      { path: 'stats', component: CardStatsPage },
      { path: 'price', component: CardPricePage },
    ],
  },
  { path: 'setup', component: DuelistSetupPage },
  { path: 'collection', component: CollectionPage, canActivate: [duelistProfileGuard] },
  { path: '**', redirectTo: 'catalog' },
];
