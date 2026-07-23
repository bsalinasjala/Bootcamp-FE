import { Directive, ElementRef, Renderer2, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]',
})
export class CardHighlightDirective {
  atk = input<number | undefined>();
  highlightThreshold = input(2500);

  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  //Uso Renderer2 para agregar una clase CSS al elemento donde está aplicada la directiva.

  constructor() {
    effect(() => {
      const atk = this.atk();
      const threshold = this.highlightThreshold();
      const isHighlighted = atk !== undefined && atk >= threshold;

      if (isHighlighted) {
        this.renderer.addClass(this.element.nativeElement, 'is-highlighted-card');
        return;
      }

      this.renderer.removeClass(this.element.nativeElement, 'is-highlighted-card');
    });
  }
}
