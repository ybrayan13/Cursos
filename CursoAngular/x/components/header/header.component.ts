import { Component, Input } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  paises: Pais[] = [];
  paisPosicionado: Pais;

  constructor(private _paisService: PaisService) {
    this.paises = _paisService.getPaises();
    this.paisPosicionado = this.paises[0];
  }

  paisSeleccionado(e: Pais) {
    console.log(e);
    this.paisPosicionado = e;
  }
}
