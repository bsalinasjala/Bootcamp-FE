import { Service, signal } from '@angular/core';

@Service()
export class DuelistProfileService {
  alias = signal('');

  saveAlias(alias: string): void {
    this.alias.set(alias.trim());
  }

  hasAlias(): boolean {
    return this.alias().length > 0;
  }
}
