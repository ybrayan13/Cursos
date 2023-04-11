import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: [],
})
export class BodyComponent {
  frase = {
    mensaje:
      'Hoy me he enamorado de alguien que ni siquiera conozco. ¿Qué has hecho tú para arruinar tu vida? ',
    autor: 'Dr. House',
  };
  mostrar = true;

  villanos = [
    'El Joker (El caballero Oscuro)',
    'Darth Vader (Star Wars)',
    'Hannibal Lecter (El silencio de los corderos)',
    'Lord Voldemort (Harry Potter)',
    'Freddy Krueger (Pesadilla en Elm Street)',
    'Jack Torrance (El resplandor)',
    'Palpatine (Star Wars)',
    'Agente Smith (Matrix)',
    'T-800 (Terminator)',
    'Magneto (X-Men)',
  ];
}
