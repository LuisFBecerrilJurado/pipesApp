import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public i18nSelectForm: string = '{{ value_expression | i18nSelect : mapping }}';
  public i18nPluralForm: string = '{{ value_expression | i18nPlural : pluralMap [ : locale ] }}';
  public sliceForm: string = '{{ value_expression | slice : start [ : end ] }}';
  public jsonForm: string = '{{ value_expression | json }}';
  public keyValueForm: string = '{{ input_expression | keyvalue [ : compareFn ] }}';
  public AsyncForm: string = '';

// ----- i18nSelect ----- \\
  public name: string = 'Francisco';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Elena';
    this.gender = 'female';
  }

// ----- Fin i18nSelect ----- \\

// ----- i18nPlural ----- \\
  public clients: string[] = ['Maria', 'Juan', 'Luis', 'Alicia', 'Ricardo', 'Monserrath', 'Fernando', 'Ana', 'Ulises', 'Elizabeth'];

  public clientsMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1': ' tenemos un cliente esperando.',
    '=2': ' tenemos 2 clientes esperando.',
    'other' : ' tenemos # clientes esperando.',
  }

  deleteClient(): void{
    this.clients.shift();
  }
// ----- Fin i18nPlural ----- \\

// ----- KeyValue ----- \\
  public person = {
    name: 'Fran',
    age: 29,
    address: 'Toluca, México'
  }
// ----- Fin KeyValue ----- \\

// ----- Async ----- \\
  
// ----- Fin Async ----- \\
}
