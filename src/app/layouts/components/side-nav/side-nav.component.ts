import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthorizationState } from '@core/modules/authorization/state/authorization.state';
import { UserState } from '@core/modules/user/state/user.state';
import { getLinksBasedOnRole } from '@layouts/links';
import { MenuItemModel } from '@layouts/model/layout.interface';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }



  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public menuLinks!: MenuItemModel[];
  public productTitle: string = 'payroll'
  public isOpened: boolean;


  @Select(AuthorizationState.grantedRoles) public grantedRoles$: Observable<string[]>;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._returnMenuLinks();
    this._defaultMenuStatus();
    this._closeSidebarOnRouteChangeOnMobile();


  }

  public openChanged($event) {
    this.isOpened = $event
  }

  private _returnMenuLinks() {
    this.grantedRoles$.subscribe((roles: string[]) => {
      if (roles && roles.length) this.menuLinks = getLinksBasedOnRole(roles);
    })
  }

  private _defaultMenuStatus() {
    (this.mobileQuery.matches) ? this.isOpened = false : this.isOpened = true
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  private _closeSidebarOnRouteChangeOnMobile() {
    // console.log('this.mobileQuery.matches', this.mobileQuery.matches)
    if (this.mobileQuery.matches) {
      this._router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((res) => {
          this.isOpened = false;
        });
    }
  }


}
