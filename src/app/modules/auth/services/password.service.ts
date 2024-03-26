import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPasswordResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private apiUrl = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  forgotPassword(email: string): Observable<ForgotPasswordResponse> {
    const url = `${this.apiUrl}/forgot-password`;
    return this.http.post<ForgotPasswordResponse>(url, { email });
  }



  resetPassword(token: string, password: string, confirmPassword: string): Observable<ForgotPasswordResponse> {
    const url = `${this.apiUrl}/reset-password/${token}`;
    return this.http.post<ForgotPasswordResponse>(url, { password, confirmPassword }, { withCredentials: true });
  }

}
