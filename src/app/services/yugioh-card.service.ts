import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { YugiohCard, YugiohCardResponse } from '../models/yugioh-card.model';

@Injectable({
  providedIn: 'root',
})
export class YugiohCardService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  getInitialCards(limit: number, offset: number): Observable<YugiohCard[]> {
    const params = new HttpParams().set('num', limit).set('offset', offset);

    return this.http
      .get<YugiohCardResponse>(this.apiUrl, { params })
      .pipe(map((response) => response.data ?? []));
  }

  searchCards(term: string, limit: number, offset: number): Observable<YugiohCard[]> {
    const searchTerm = term.trim();

    if (!searchTerm) {
      return this.getInitialCards(limit, offset);
    }

    const params = new HttpParams()
      .set('fname', searchTerm)
      .set('num', limit)
      .set('offset', offset);

    return this.http.get<YugiohCardResponse>(this.apiUrl, { params }).pipe(
      map((response) => response.data ?? []),
      catchError((error) => {
        if (error.status === 400) {
          return of([]);
        }

        return throwError(() => error);
      }),
    );
  }
}
