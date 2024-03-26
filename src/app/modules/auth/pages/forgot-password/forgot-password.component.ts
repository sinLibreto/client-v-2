import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  loading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private passwordService: PasswordService) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      this.loading = true;
      this.errorMessage = null;
      this.successMessage = null;
      const email = this.forgotPasswordForm.get('email')?.value;

      this.passwordService.forgotPassword(email).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          this.loading = false;
          this.successMessage = response.message;
        },
        error: (error) => {
          console.error('Error del servidor:', error);
          this.loading = false;
          this.errorMessage = 'Hubo un error al intentar enviar el correo de restablecimiento de contraseña. Por favor, intenta de nuevo más tarde.';
        }
      });
    }
  }
}
