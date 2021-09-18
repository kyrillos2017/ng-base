import { CoreModule } from './core/core.module';
import { LayoutModule } from '@angular/cdk/layout';
import { environment } from './../environments/environment';
import { statesConfig } from './config/states.config';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Core & layout installation
    CoreModule.forRoot(),
    LayoutModule,
    // State core modules and plugins
    NgxsSelectSnapshotModule.forRoot(),
    NgxsModule.forRoot([
      ...statesConfig.coreStates
    ], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: [...statesConfig.statesToBeCached],
      storage: StorageOption.LocalStorage
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name:'Allam-Architecure'
    }),
    NgxsDispatchPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
