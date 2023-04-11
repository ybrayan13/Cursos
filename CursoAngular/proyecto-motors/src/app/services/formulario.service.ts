import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor() {
    console.warn('conectado formulario');
  }

  getFormularios() {
    return this.formulario;
  }

  private formulario = [
    {
      id: 'NC',
      nombre: 'Nota Credito',
    },
    {
      id: 'ND',
      nombre: 'Nota Debito',
    },
    {
      id: 'FE',
      nombre: 'Factura Electronica',
    },
    {
      id: 'FX',
      nombre: 'Factura Exportación',
    },
  ];
}
