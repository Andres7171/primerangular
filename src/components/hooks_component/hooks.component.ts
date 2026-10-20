import { Component } from '@angular/core'

@Component ({
    selector: 'app-hooks-component',
    standalone: false,
    templateUrl: './hooks.component.html',
    // styleUrls: [
    //     '',
    // ]
})

export class HooksComponent {
    public mensaje: string
    
    constructor() {
        this.mensaje = "Hoy es lunes..."
    }

    ngOnInit() {
        console.log("On init");
    }

    ngDoCheck() {
        console.log("Do check");
    }

    cambiarMensaje() {
        this.mensaje = "Y mañana martes!!"
    }
}