import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from './components/shared-components.module';
import { DirectivesModule } from './directives/directives.module';
import { MaterialModule } from './material.module';
import { ModalsModule } from './modules/modals/modals.module';
import { PaginationModule } from './modules/pagination/pagination.module';
import { SelectsModule } from './modules/selects/selects.module';
import { SnackbarsModule } from './modules/snackbars/snackbars.module';
import { TablesModule } from './modules/tables/tables.module';
import { ValidationModule } from './modules/validation/validation.module';
import { PipesModule } from './pipes/pipes.module';
import { InfoFieldComponent } from './components/info-field/info-field.component';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        SharedComponentsModule,
        ValidationModule,
        TablesModule,
        ModalsModule,
        PaginationModule,
        SnackbarsModule,
        SelectsModule,
        ModalsModule,
        DirectivesModule,
        PipesModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        SharedComponentsModule,
        ValidationModule,
        TablesModule,
        ModalsModule,
        PaginationModule,
        SnackbarsModule,
        SelectsModule,
        DirectivesModule,
        PipesModule,
        InfoFieldComponent
    ],
    declarations: [
    InfoFieldComponent
  ],
    providers: [],
})
export class SharedModule { }
