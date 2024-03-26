import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ResetPasswordActions from '../../../../store/actions'
import { PasswordService } from '../../services/password.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetPasswordForm!: FormGroup;
  loading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  token: string;

  constructor(
    private fb: FormBuilder,
    private passwordService: PasswordService,
    private route: ActivatedRoute
  ) {
    // Inicializa el token con un valor vacío o con un valor por defecto
    this.token = '';
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.params['token']; // Asume que el token se pasa como parte de la URL

    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) { // aquí comprobamos si las contraseñas coinciden
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      this.loading = true;
      this.errorMessage = null;
      this.successMessage = null;
      const { password, confirmPassword } = this.resetPasswordForm.value;

      this.passwordService.resetPassword(this.token, password, confirmPassword).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          this.loading = false;
          this.successMessage = response.message;
        },
        error: (error) => {
          console.error('Error del servidor:', error);
          this.loading = false;
          this.errorMessage = 'Hubo un error al intentar restablecer la contraseña. Por favor, intenta de nuevo más tarde.';
        }
      });
    }
  }


}
