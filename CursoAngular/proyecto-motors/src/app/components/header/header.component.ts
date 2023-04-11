import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Pais } from 'src/app/interfaces/pais';
import { CategoriaService } from 'src/app/services/categoria.service';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .categoria {
        cursor: pointer;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  @ViewChild('btnCanvasClose') btnCanvasClose: ElementRef;
  @Output() propagarPais = new EventEmitter<Pais>();

  paises: Pais[] = [];
  paisPosicionado: Pais;
  categorias: Categoria[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.propagarPais.emit(this.paisPosicionado);
  }

  constructor(
    private _paisService: PaisService,
    private _categoriaService: CategoriaService,
    private _router: Router
  ) {
    this.paises = this._paisService.getPaises();
    this.paisPosicionado = this.paises[0];
    this.categorias = this._categoriaService.getCategorias();
    // console.log(this.categorias);
  }

  paisSeleccionado(e: Pais) {
    // console.log(e);
    this.paisPosicionado = e;
    this.propagarPais.emit(e);
  }

  navegarCategoria(e: string) {
    this._router.navigate([e.toLocaleLowerCase()]);
    this.btnCanvasClose.nativeElement.click();
  }
}
