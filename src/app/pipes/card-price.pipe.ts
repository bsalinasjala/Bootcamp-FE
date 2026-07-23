import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardPrice',
})
export class CardPricePipe implements PipeTransform {
  transform(value: string | number | null | undefined): string {
    if (value === null || value === undefined || value === '') {
      return 'N/A';
    }

    const price = Number(value);

    if (Number.isNaN(price)) {
      return 'N/A';
    }

    return `$${price.toFixed(2)}`;
  }
}
