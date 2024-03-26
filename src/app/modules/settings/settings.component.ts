import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  userInfoForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userInfoForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      quote: [''],
      work: [''],
      school: [''],
      location: [''],
      bgImageVersion: [''],
      profilePicture: [''],
      bgImageId: [''],
      social: this.fb.group({
        facebook: [''],
        instagram: [''],
        twitter: [''],
        youtube: ['']
      }),
      password: [''] // Opcional, incluir validaciones si es necesario
    });
  }

  ngOnInit(): void {}

  updateUserInfo(): void {
    if (this.userInfoForm.valid) {
      this.userService.updateUserInfo(this.userInfoForm.value).subscribe({
        next: (response) => {
          console.log('Información del usuario actualizada con éxito', response);
          // Aquí podrías, por ejemplo, mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error al actualizar la información del usuario', error);
          // Aquí manejar el error, mostrando un mensaje al usuario, por ejemplo
        }
      });
    }
  }
}
