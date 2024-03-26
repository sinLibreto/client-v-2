import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, tap } from 'rxjs';
import { parseJwt } from '../utils/jwt.utils';
import { Router } from '@angular/router';
import { URL_SERVER } from 'src/app/config/config';
import { AuthResponse } from '../interfaces/auth.interface';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${URL_SERVER}/auth`;
  userConnect!:AuthResponse
  private userSubject: BehaviorSubject<AuthResponse | null> = new BehaviorSubject<AuthResponse | null>(null);
  public user$: Observable<AuthResponse | null> = this.userSubject.asObservable();


  constructor(
    private http: HttpClient,
    private router: Router

    ) { }

    signUp(user: any): Observable<any> {
      return this.http.post<any>('http://localhost:5000/api/v1/signup', user).pipe(
        tap(authResult => {
          if (authResult.token) {
            this.setSession(authResult);
          }
        })
      );
    }
//
signIn(credentials: { username: string; password: string }): Observable<any> {
  return this.http.post<any>('http://localhost:5000/api/v1/signin', credentials).pipe(
    tap(authResult => {
      if (authResult.token) {
        localStorage.setItem('token', authResult.token); 

        // this.setSession(authResult);
      }
    })
  );
}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Aquí deberías añadir la lógica para validar el token y asegurarte de que no ha expirado
    return !!token;
  }
  getUsername(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = parseJwt(token);
      return decoded ? decoded.username : null;
    }
    return null;
  }

currentUser(): Observable<AuthResponse> {
  return this.http.get<AuthResponse>('http://localhost:5000/api/v1/currentuser').pipe(
    tap(response => {
      this.userSubject.next(response); // Actualiza el BehaviorSubject
    })
  );
}

  private setSession(authResult: any): void {
    localStorage.setItem('token', authResult.token);

  }

  // funcion salir y borrar el token
  logout(): void {
    localStorage.clear();
    this.deleteAllCookies();
    this.router.navigateByUrl('/auth/login')
  }
  private deleteAllCookies(): void {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c.trim().split('=')[0] + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    });
  }
  updateUser(user: AuthResponse | null): void {
    this.userSubject.next(user);
  }

}
