import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { YugiohCard, YugiohCardResponse } from '../models/yugioh-card.model';

@Injectable({
  providedIn: 'root',
})
export class YugiohCardService {
  private readonly apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  private readonly defaultSearch = 'Dragon';

  constructor(private readonly http: HttpClient) {}

  getInitialCards(): Observable<YugiohCard[]> {
    return this.searchCards(this.defaultSearch);
  }

  searchCards(term: string): Observable<YugiohCard[]> {
    const searchTerm = term.trim() || this.defaultSearch;
    const params = new HttpParams().set('fname', searchTerm);

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
