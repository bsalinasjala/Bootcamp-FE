import { Component, Input, signal, ChangeDetectionStrategy } from '@angular/core';

export interface SectionTab {
  title: string;
  content: string;
}

@Component({
  selector: 'app-section-tabs',
  imports: [],
  templateUrl: './section-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './section-tabs.css',
})
export class SectionTabs {
  @Input({ required: true }) sections: SectionTab[] = [];

  activeIndex = signal(0);
}
