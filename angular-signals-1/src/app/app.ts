import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal<string>('angular-signals-1');
  protected readonly menuOpen = signal<boolean>(true);

  protected actionMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  @HostListener('window:resize')
  protected closeMenuOnSmallScreen(): void {
    if (window.innerWidth <= 768) {
      this.menuOpen.set(false);
    }
  }
}