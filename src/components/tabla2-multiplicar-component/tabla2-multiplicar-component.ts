import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla2-multiplicar-component',
  standalone: false,
  styleUrl: './tabla2-multiplicar-component.css',
  templateUrl: './tabla2-multiplicar-component.html',
})
export class Tabla2MultiplicarComponent {
  public numero!:number;
  public resultados:number[];

  constructor(){
    this.resultados=[]
  }

  ngDoCheck() {
    
  }

  recibirNumero():void{
    this.resultados=[]
    for (let i = 1; i <=10; i++) {
      this.resultados.push(this.numero*i)
      
    }
  }
}
