import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, of } from 'rxjs';
import { YugiohCard } from '../models/yugioh-card.model';
import { YugiohCardService } from '../services/yugioh-card.service';

export const cardDetailResolver: ResolveFn<YugiohCard | null> = (route) => {
  const cardService = inject(YugiohCardService);
  const id = route.paramMap.get('id');

  if (!id) {
    return of(null);
  }

  return cardService.getCardById(id).pipe(catchError(() => of(null)));
};
