import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',

})
export class BasicsPageComponent {
  public lowerCase: string = '{{ value | lowercase }}';
  public upperCase: string = '{{ value | uppercase }}';
  public titleCase: string = '{{ value | titlecase }}';


}
