import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros',
  standalone: false,
  templateUrl: './sumar.numeros.component.html',
})
export class SumarNumerosComponent {
  public suma: number;
  
  @ViewChild('cajaNumero1') cajaNumero1!: ElementRef;
  @ViewChild('cajaNumero2') cajaNumero2!: ElementRef;

  constructor() {
    this.suma = 0;
  }

  sumarNumeros(): void {
    console.log(this.cajaNumero1.nativeElement.value)
    console.log(this.cajaNumero1.nativeElement.value)
    
    this.suma =
      parseInt(this.cajaNumero1.nativeElement.value) +
      parseInt(this.cajaNumero2.nativeElement.value);
  }
}
