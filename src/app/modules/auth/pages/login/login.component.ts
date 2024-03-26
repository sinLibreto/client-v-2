import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { loginStart } from 'src/app/store/actions/auth.actions'; // Asegúrate de ajustar la ruta de importación
import { Observable, Subscription } from 'rxjs';
import { selectAuthError, selectAuthLoading } from 'src/app/store/selectors/auth.selectors'; // Ajusta la ruta de importación
import { AuthState } from 'src/app/store/states';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private store: Store<AuthState>
  ) {
    this.loginForm = this.fb.group({
      username: [localStorage.getItem('username') || 'danny', [Validators.required]],
      password: ['dym123', [Validators.required]],
      rememberme: [false]
    });
    this.loading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
  }

  ngOnInit(): void {
    // Suscribirse al selector de error para mostrar mensajes de error
    this.subscriptions.add(
      this.error$.subscribe(error => {
        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error en el inicio de sesión',
            text: error,
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    // Limpiar las suscripciones
    this.subscriptions.unsubscribe();
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos requeridos.',
      });
      return;
    }

    const credentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    // Despachar la acción de inicio de sesión
    this.store.dispatch(loginStart(credentials));
  }
}
