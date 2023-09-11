import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})

export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos',
            icon: 'pi pi-align-left',
            routerLink: 'basics',
          },
          {
            label: 'Fechas',
            icon: 'pi pi-calendar',
            routerLink: 'dates',
          },
          {
            label: 'Números',
            icon: 'fa-solid fa-hashtag',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'fa-solid fa-question',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Personalizados',
        icon: 'fa-solid fa-pencil',
        items: [
          {
            label: 'Custom',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      }
    ];
  }
}
