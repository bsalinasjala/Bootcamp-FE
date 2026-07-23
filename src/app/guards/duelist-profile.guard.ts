import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DuelistProfileService } from '../services/duelist-profile.service';

export const duelistProfileGuard: CanActivateFn = () => {
  const profile = inject(DuelistProfileService);
  const router = inject(Router);

  return profile.hasAlias() ? true : router.createUrlTree(['/setup']);
  //createUrlTree le devuelve al Router una ruta alternativa. En este caso, si el usuario no tiene alias, no activa /collection y lo redirige a /setup.
};
