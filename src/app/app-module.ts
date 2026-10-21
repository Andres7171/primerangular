import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { DeportesComponent } from '../components/deportes_component/deportes.component';
import { FormsModule, NgModel } from '@angular/forms';
import { HooksComponent } from '../components/hooks_component/hooks.component';
import { FormsBindingComponent } from '../components/forms_binding_component/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumar_numeros_component/sumar.numeros.component';
import { TablaMultiplicarComponent } from '../components/tabla-multiplicar-component/tabla-multiplicar-component';
import { Tabla2MultiplicarComponent } from '../components/tabla2-multiplicar-component/tabla2-multiplicar-component';
@NgModule({
  declarations: [
    App,
    DeportesComponent,
    HooksComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    TablaMultiplicarComponent,
    Tabla2MultiplicarComponent

  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
