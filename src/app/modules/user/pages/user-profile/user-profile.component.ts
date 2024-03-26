import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { selectUserProfile, selectUserProfileError, selectUserProfileLoading } from 'src/app/store/selectors';
import * as UserProfileActions from '../../../../store/actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId!: string;
  userProfile$ = this.store.select(selectUserProfile);
  loading$ = this.store.select(selectUserProfileLoading);
  error$ = this.store.select(selectUserProfileError);

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    // Intenta obtener userId de la ruta, y usa '65fc75f99be09d7fa74247a8' como valor por defecto si es null
    this.userId = this.route.snapshot.paramMap.get('userId') ?? '65fc75f99be09d7fa74247a8';

    // Una vez asegurado que userId tiene un valor, despacha la acción para cargar el perfil del usuario
    this.store.dispatch(UserProfileActions.loadUserProfile({ userId: this.userId }));
  }
}
