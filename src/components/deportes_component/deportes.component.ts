import { Component } from "@angular/core";

@Component({
    selector: 'app-deportes',
    standalone: false,
    templateUrl: "./deportes.component.html",
    styleUrls: [
        './deportes.component.css',
    ]
})
export class DeportesComponent{
    public numeros:Array <number>
    public sports:Array <string>
    constructor(){
        this.numeros=[4,77,82,15,56]
        this.sports=['Baloncesto','Futbol','Natacion','Tenis']
    }
}