import { Login } from './../../state/auth.actions';
import { HeadRefresherService } from './../../../services/head-refresher/head-refresher.service';
import { HeadRefresherType } from './../../../services/head-refresher/head-refresher.models';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, HeadRefresherType {

  constructor(
    private _store: Store,
    private _headRefresher: HeadRefresherService
  ) { }

  public headInformation = {
    title: 'Login'
  }

  ngOnInit(): void {
    console.log('hi from login component');
  }

  public login() {
    this._store.dispatch(new Login);
    this.refreshHeadInformation();
  }

  public refreshHeadInformation(): void {
    this._headRefresher.refresh(this.headInformation);
  }

}
