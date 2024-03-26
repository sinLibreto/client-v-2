import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../auth/interfaces/auth.interface';
import { URL_SERVER } from 'src/app/config/config';
import { IUserResponse } from '../interfaces/user.interfaces';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/api/v1';


  constructor(private http: HttpClient) {}

  getAllUsers(page: number = 1): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`${this.apiUrl}/user/all/${page}`);
  }

  getUserProfile(userId: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/user/profile/${userId}`);
  }

  updateUserInfo(userInfo: UserModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/basic-info`, userInfo, { withCredentials: true });
  }


}
