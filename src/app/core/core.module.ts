// import { authModuleConfig } from './auth/config/oauth-module.config';
import { AuthGuard } from './auth/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { SpinnerModule } from './modules/spinner/spinner.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpService } from './http/http/http.service';
import { HeadersInterceptor } from "./http/interceptors/headers-interceptor";
import { ErrorHandlerInterceptor } from "./http/interceptors/error-handler.interceptor";
import { SomethingWentWrongComponent } from './components/something-went-wrong/something-went-wrong.component';

@NgModule({
  declarations: [SomethingWentWrongComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SpinnerModule,
  ],
  exports: [SpinnerModule],
  providers: [
    AuthGuard,
    {
      provide: HttpService,
      useClass: HttpService
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
