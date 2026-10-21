import { Component,ElementRef , ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {

  public numero!:number
  public resultados:number[]
  @ViewChild('cajaNumero') cajaNumero!: ElementRef;
  constructor(

  ){this.resultados = [];}

  recibirNumero():void{
    this.resultados=[]
    this.numero= parseInt( this.cajaNumero.nativeElement.value)
    for (let i = 1; i <= 10; i++) {
      this.resultados.push(this.numero * i);
    }
  }
}
