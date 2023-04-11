import { Component } from '@angular/core';
import { Pais } from './interfaces/pais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyecto-motors';
  pais: Pais;

  constructor() {
    // this.paisSeleccionado()
  }

  paisSeleccionado(paisSeleccionado: Pais) {
    this.pais = paisSeleccionado;
    console.log(paisSeleccionado);
  }
}
