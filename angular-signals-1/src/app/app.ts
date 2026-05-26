import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-signals-1');
  protected readonly menuOpen = signal(true);

  protected actionMenu(): void {
    this.menuOpen.update((value) => !value);
  }
}
