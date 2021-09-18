import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { InnerPageLayoutComponent } from './inner-page-layout/inner-page-layout.component';
import { LinkComponent } from './link/link.component';
import { NoResultComponent } from './no-result/no-result.component';
import { SearchInputComponent } from './search-input/search-input.component';


@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [InnerPageLayoutComponent, NoResultComponent, SearchInputComponent, LinkComponent],
    declarations: [InnerPageLayoutComponent, NoResultComponent, SearchInputComponent, LinkComponent],
    providers: [],
})
export class SharedComponentsModule { }
