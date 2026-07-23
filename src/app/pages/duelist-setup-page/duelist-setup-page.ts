import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DuelistProfileService } from '../../services/duelist-profile.service';

@Component({
  selector: 'app-duelist-setup-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './duelist-setup-page.html',
  styleUrl: './duelist-setup-page.css',
})
export class DuelistSetupPage {
  private readonly router = inject(Router);
  readonly profile = inject(DuelistProfileService);

  alias = this.profile.alias();

  saveAlias(): void {
    this.profile.saveAlias(this.alias);

    if (this.profile.hasAlias()) {
      this.router.navigate(['/collection']);
    }
  }
}
