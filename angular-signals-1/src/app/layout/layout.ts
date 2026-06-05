import { Component, HostListener, signal, computed } from '@angular/core';

type Role = 'user'| 'admin';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent {
  protected readonly title = signal<string>('angular-signals-1');
  protected readonly menuOpen = signal<boolean>(true);
  protected readonly role = signal<Role>('user');
  protected readonly isAdmin = computed(() => this.role() === 'admin');

  protected setRole(role : Role):void {
    this.role.set(role);
    if(role !== 'admin'){
      this.menuOpen.set(false);
    }
  }

  protected actionMenu(): void {
    this.menuOpen.update(v => !v);
  }

  @HostListener('window:resize')
  protected closeMenuOnSmallScreen(): void {
    if (window.innerWidth <= 768) {
      this.menuOpen.set(false);
    }
  }
}