import { Component } from '@angular/core';
import { AuthResponse } from 'src/app/modules/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  user: AuthResponse | null = null;
  profilePictureUrl: string | undefined;
  bgImageVersion: string | undefined;
  username: string | undefined;
  occupation: string | undefined;


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      console.log('user conectado',{user})
      this.user = user;
      this.profilePictureUrl = user?.user.profilePicture;
      this.username = user?.user.username;
      this.bgImageVersion = user?.user.bgImageVersion;
      this.occupation = user?.user.occupation;



      console.log(' la occupation de perfil:', this.occupation);

    });
  }

  logout() {
    this.authService.logout();
  }
}
