import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'opis-core';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url: string =
      state.url; /* Pass this on to the context - to make returnUrl possible for deep links */

    //
    // Investigate if login is correct
    return this.isLoggedIn(url);
  }

  constructor(private authService: AuthService, private router: Router) {}

  /**
   * @param returnUrl Optional parameter with URL to pass as returnUrl to login page if user is not logged
   */
  private isLoggedIn(returnUrl?: string): Observable<boolean> {
    return this.authService.checkauth().pipe<boolean, boolean>(
      map((ctx: any) => {
        return true;
      }),
      catchError((err) => {
        const deepLink = returnUrl ? { returnUrl } : {};
        this.router.navigate(['/login'], { queryParams: deepLink });
        /* Direct to login page */
        return of(false);
      })
    );
  }
}
