import { Directive, computed, input } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]',
  host: {
    '[class.is-highlighted-card]': 'isHighlighted()',
  },
})
export class CardHighlightDirective {
  atk = input<number | undefined>();
  highlightThreshold = input(2500);

  isHighlighted = computed(() => {
    const atk = this.atk();
    const threshold = this.highlightThreshold();

    return atk !== undefined && atk >= threshold;
  });
}
