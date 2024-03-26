import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthResponse } from 'src/app/modules/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit, OnDestroy {
  user: AuthResponse | null = null;

  bgImageVersion: string | undefined;
  profilePicture: string | undefined;
  username: string | undefined;


  private subscription: Subscription = new Subscription();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscription.add(this.authService.user$.subscribe(user => {
      if (user && user.user) {
        this.bgImageVersion = user.user.bgImageVersion;
        this.profilePicture = user.user.profilePicture;
       this.username = user?.user.username;

        // console.log('this.profilePicture',this.profilePicture)
        // console.log('this.bgImageVersion',this.bgImageVersion)
        // console.log('Nombre de usuario:', this.username);

      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
