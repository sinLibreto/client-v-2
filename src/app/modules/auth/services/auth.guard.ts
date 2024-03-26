import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root' // Provee este guard a través del root injector, haciéndolo disponible en toda la aplicación
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.currentUser().pipe(
      map(resp => {
        // console.log('El usuario es permitido',resp);
        return true;
      }),
      catchError((err) => {
        // console.log('No autorizado, redirigiendo...');
        this.router.navigate(['/auth/login']);
        return of(false);
      })
    );
  }
}


