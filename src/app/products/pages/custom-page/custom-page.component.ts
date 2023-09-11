import { Component } from '@angular/core';

@Component({
  selector: 'products-custom-page',
  templateUrl: './custom-page.component.html',
})
export class CustomPageComponent {
  public toggleForm: string = '{{MINÚSCULAS| toggleCase}} {{mayúsculas | toggleCase:true}}';
  public isUpperCase: boolean = false;
  public iconFly: string = 'pi pi-check'
  public iconOrder: string = 'pi pi-sort-alpha-down';
  public labelFly: string = 'Can Fly';
  public labelOrder: string = 'By Name (A-Z)';
  public countFly: number = 0;
  public countOrder: number = 0;

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeIcon(): void{
    this.countFly += 1;

    if (this.countFly % 2 === 0) {
      this.iconFly = 'pi pi-check';
      this.labelFly = 'Can Fly';
    } else {
      this.iconFly = 'pi pi-times';
      this.labelFly = 'Can´t Fly';
    }

  }
  changeIconOrder(): void {
    this.countOrder += 1;

    if (this.countOrder % 2 === 0) {
      this.iconOrder = 'pi pi-sort-alpha-down';
      this.labelOrder = 'By Name (A-Z)';
    } else {
      this.iconOrder = 'pi pi-sort-alpha-down-alt';
      this.labelOrder = 'By Name (Z-A)';
    }
  }
}
