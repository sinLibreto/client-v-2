import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent {


  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(AuthActions.loadCurrentUser());
  }

}
