import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DefaulPageComponent } from './pages/default-page/default-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { DatesPageComponent } from './pages/dates-page/dates-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    DefaulPageComponent,
    CustomPageComponent,
    DatesPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    SharedModule,
  ]
})
export class ProductsModule { }
