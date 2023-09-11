import { NgModule } from '@angular/core';

// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { AnimateModule } from 'primeng/animate';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    AnimateModule,
    DividerModule,
    TableModule,
    AccordionModule,
    TabViewModule,
    ToolbarModule,
  ]
})
export class PrimeNgModule { }
