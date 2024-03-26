import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse, IUser } from '../../auth/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private userSubject: BehaviorSubject<AuthResponse | null> = new BehaviorSubject<AuthResponse | null>(null);
  public user$: Observable<AuthResponse | null> = this.userSubject.asObservable();
  private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  constructor() {}

  // get user state
  updateUser(user: AuthResponse | null): void {
    this.userSubject.next(user);
  }

  // get all users states
    updateUsers(users: IUser[]): void {
      this.usersSubject.next(users);
    }

    getUserProfile(){}

}
