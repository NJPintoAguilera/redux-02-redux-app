import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  // el input es para poder recibir del padre el valor del contador, debo declararlo tambien en el HTML
  @Input() contador: number;

  // el output para poder que los valores de contador padre e hijo sean el mismo
  @Output() cambioContador = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  multiplicarFunction() {
    this.contador *= 10;
    this.cambioContador.emit(this.contador);
  }

  dividirFunction() {
    this.contador /= 10;
    this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }
}
