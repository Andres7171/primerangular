import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { DeportesComponent } from '../components/deportes_component/deportes.component';
import { FormsModule, NgModel } from '@angular/forms';
import { HooksComponent } from '../components/hooks_component/hooks.component';
import { FormsBindingComponent } from '../components/forms_binding_component/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumar_numeros_component/sumar.numeros.component';

@NgModule({
  declarations: [App, DeportesComponent, HooksComponent, FormsBindingComponent,SumarNumerosComponent],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
