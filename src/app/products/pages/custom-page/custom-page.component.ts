import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-custom-page',
  templateUrl: './custom-page.component.html',
})
export class CustomPageComponent {
  public toggleForm: string = '{{MINÚSCULAS| toggleCase}} {{mayúsculas | toggleCase:true}}';
  public isUpperCase: boolean = false;

  public orderBy: keyof Hero | undefined | '' = 'canFly';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Wonder Woman',
      canFly: true,
      color: Color.yellow,
    },
  ]
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  getColorName(value: Color): string {
    return Color[value];
  }

  changeOrder(value : keyof Hero) {
    this.orderBy = value;
  }
}
