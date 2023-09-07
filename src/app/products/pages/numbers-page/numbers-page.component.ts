import { Component } from '@angular/core';

interface Opciones{
  option: string;
  typeValue: string;
  description: string;
}

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: []
})
export class NumbersPageComponent {
  public formCurrency: string = '{{ value | currency [ : currencyCode [ : display [ : digitsInfo [ : locale ] ] ] ] }}';
  public formDecimal: string = '{{ value_expression | number [ : digitsInfo [ : locale ] ] }}';
  public formPercent: string = '{{ value_expression | percent [ : digitsInfo [ : locale ] ] }}';

  public params: Opciones[] = [
    { option: 'currencyCode', typeValue: 'string',         description: 'Utiliza ISO 4217 para codigos de divisa(moneda) ej. USD para dólar estadounidense, EUR para el euro' },
    { option: 'display',      typeValue: 'boolean string', description: 'El formato del indicador de moneda. Uno de los siguientes: code: Muestra el código(como USD). symbol: Muestra el símbolo de la divisa'},
    { option: 'digitsInfo',   typeValue: 'string',         description: 'Representación decimal especificado por un string' },
    { option: 'locale',       typeValue: 'string',         description: 'Código local para reglas de formato' },
  ]

  public params1: Opciones[] = [
    { option: 'digitsInfo', typeValue: 'string', description: 'Define la representacion de digitos y decimales' },
    { option: 'locale',     typeValue: 'string', description: 'Especifica que reglas locales de formato utilizar'},
  ]


  public columnas: any[] = [
    { field: 'option', header: 'Opción' },
    { field: 'typeValue', header: 'Valor' },
    { field: 'description', header: 'Descripción' },
  ]

  public in: number = 1.3495;
  public pi: number = 3.14159265359;
}
