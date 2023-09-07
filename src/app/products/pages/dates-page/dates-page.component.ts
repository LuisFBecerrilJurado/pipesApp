import { Component} from '@angular/core';

interface Opciones{
  option: string;
  equivalent: string;
  result: string;
}
@Component({
  selector: 'app-dates-page',
  templateUrl: './dates-page.component.html',
  styles: [
  ]
})
export class DatesPageComponent  {
  public params: Opciones[] =[
    { option: 'short', equivalent: 'M/d/yy, h:mm a', result: '6/15/15, 9:03 AM' },
    { option: 'medium', equivalent: 'MMM d, y, h:mm:ss a', result: 'Jun 15, 2015, 9:03:01 AM' },
    { option: 'long', equivalent: 'MMMM d, y, h:mm:ss a z', result: 'June 15, 2015 at 9:03:01 AM GMT+1' },
    { option: 'full', equivalent: 'EEEE, MMMM d, y, h:mm:ss a zzzz', result: 'Monday, June 15, 2015 at 9:03:01 AM GMT+01:00' },
    { option: 'shortDate', equivalent: 'M/d/yy', result: '6/15/15' },
    { option: 'mediumDate', equivalent: 'MMM d, y', result: 'Jun 15, 2015' },
    { option: 'longDate', equivalent: 'MMMM d, y', result: 'June 15, 2015' },
    { option: 'fullDate', equivalent: 'EEEE, MMMM d, y', result: 'Monday, June 15, 2015' },
    { option: 'shortTime', equivalent: 'h:mm a', result: '9:03 AM' },
    { option: 'mediumTime', equivalent: 'h:mm:ss a', result: '9:03:01 AM' },
    { option: 'longTime', equivalent: 'h:mm:ss a z', result: '9:03:01 AM GMT+1' },
    { option: 'fullTime', equivalent: 'h:mm:ss a zzzz', result: '9:03:01 AM GMT+01:00' },
  ]

  public columnas: any[] = [
    { field: 'option', header: 'Opcion' },
    { field: 'equivalent', header: 'Equivalente' },
    { field: 'result', header: 'Resultado' },
  ]

  public customDate: Date = new Date();
}
