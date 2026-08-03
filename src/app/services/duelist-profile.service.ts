import { Service, signal } from '@angular/core';

@Service()
export class DuelistProfileService {
  private readonly aliasStorageKey = 'duelistAlias';

  alias = signal(this.getStoredAlias());

  saveAlias(alias: string): void {
    const cleanAlias = alias.trim();

    this.alias.set(cleanAlias);
    this.saveStoredAlias(cleanAlias);
  }

  hasAlias(): boolean {
    return this.alias().length > 0;
  }

  private getStoredAlias(): string {
    if (typeof window === 'undefined') {
      return '';
    }

    return window.sessionStorage.getItem(this.aliasStorageKey) ?? '';
  }

  private saveStoredAlias(alias: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem(this.aliasStorageKey, alias);
  }
}
