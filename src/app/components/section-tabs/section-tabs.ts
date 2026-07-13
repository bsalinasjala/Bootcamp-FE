import { Component, input, signal } from '@angular/core';

export interface SectionTab {
  title: string;
  content: string;
}

@Component({
  selector: 'app-section-tabs',
  imports: [],
  templateUrl: './section-tabs.html',
  styleUrl: './section-tabs.css',
})
export class SectionTabs {
  sections = input.required<SectionTab[]>();

  activeIndex = signal(0);
}
