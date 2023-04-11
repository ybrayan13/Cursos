import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empty, isEmpty } from 'rxjs';
import { Pais } from 'src/app/interfaces/pais';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [],
})
export class FormularioComponent {
  // @Input() pais: Pais;
  // @ViewChild('pais') pais: ElementRef;

  formularios: any[];
  formSeleccion: FormGroup;
  sltFormulario: string | null;

  constructor(
    private _formularioServicio: FormularioService,
    private fb: FormBuilder
  ) {
    this.formularios = this._formularioServicio.getFormularios();
    this.formSeleccion = this.fb.group({
      formulario: ['', Validators.required],
    });
  }

  optFormulario() {
    this.sltFormulario = this.formSeleccion.get('formulario')?.value;
  }
}
