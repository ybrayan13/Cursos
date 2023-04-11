import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor() {
    console.warn('categorias desplegado');
  }

  getCategorias() {
    return this.categoria;
  }

  private categoria: Categoria[] = [
    { nombre: 'Inicio', icono: 'fa-solid fa-house' },
    { nombre: 'Proveedor', icono: 'fa-solid fa-parachute-box' },
    { nombre: 'Fabricante', icono: 'fa-solid fa-marker' },
    {
      nombre: 'Distribuidor',
      icono: 'fa-solid fa-building-circle-arrow-right',
    },
    { nombre: 'Clientes', icono: 'fa-solid fa-users' },
    { nombre: 'Modelos', icono: 'fa-solid fa-calendar-days' },
    {
      nombre: 'Repuestos',
      icono: 'fa-solid fa-screwdriver-wrench',
    },
    {
      nombre: 'Formulario',
      icono: 'fa-solid fa-file-circle-plus',
    },
  ];
}
