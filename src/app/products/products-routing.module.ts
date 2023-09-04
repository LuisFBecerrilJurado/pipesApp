import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { DefaulPageComponent } from './pages/default-page/default-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { DatesPageComponent } from './pages/dates-page/dates-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaulPageComponent
  },
  {
    path: 'basics',
    component: BasicsPageComponent
  },
  {
    path: 'dates',
    component: DatesPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent
  },
  {
    path: 'custom',
    component: CustomPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
