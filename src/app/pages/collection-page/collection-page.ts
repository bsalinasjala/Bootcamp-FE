import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DuelistProfileService } from '../../services/duelist-profile.service';

@Component({
  selector: 'app-collection-page',
  imports: [RouterLink],
  templateUrl: './collection-page.html',
  styleUrl: './collection-page.css',
})
export class CollectionPage {
  readonly profile = inject(DuelistProfileService);
}
