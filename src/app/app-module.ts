import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { DeportesComponent } from '../components/deportes_component/deportes.component';
import { FormsModule } from '@angular/forms';
import { HooksComponent } from '../components/hooks_component/hooks.component';

@NgModule({
  declarations: [
    App,DeportesComponent,HooksComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
