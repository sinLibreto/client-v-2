import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { registerStart } from 'src/app/store/actions/auth.actions'; // Asegúrate de que esta ruta sea correcta
import { selectAuthLoading, selectAuthError } from 'src/app/store/selectors/auth.selectors'; // Verifica estas rutas también
import { AuthState } from 'src/app/store/states/auth.state'; // Y esta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AuthState>,
    private router: Router
  ) {
    this.isLoading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      avatarImage: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0gAAAMyAQMAAABtkHM/AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAAFiS0dEAf8CLd4AAABrSURBVBgZ7cGBAAAAAMOg+1NP4AjVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjgBSwwABwrL8wAAAAABJRU5ErkJggg=='],
      avatarColor: ['blue'],
      terms: [false, Validators.requiredTrue]


    }, { validators: this.matchPasswords });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { repassword, terms, ...formData } = this.registerForm.value; // Excluyendo 'repassword' y 'terms' del payload
      this.store.dispatch(registerStart({ user: formData }));
    } else {
      console.error('El formulario no es válido');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, revisa el formulario y completa todos los campos correctamente.',
      });
    }
  }

  private matchPasswords(group: FormGroup): { notMatching: true } | null {
    const password = group.get('password')!.value;
    const repassword = group.get('repassword')!.value;
    return password === repassword ? null : { notMatching: true };
  }

  notValidatedField(field: string): boolean {
    return this.registerForm.get(field)!.invalid && (this.registerForm.get(field)!.dirty || this.registerForm.get(field)!.touched);
  }
}
