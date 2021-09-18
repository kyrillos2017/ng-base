import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';
import { AutoLoginComponent } from './pages/autologin/autologin.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [LoginComponent, LogoutComponent, AutoLoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  providers: [AuthGuard]
})
export class AuthModule { }
