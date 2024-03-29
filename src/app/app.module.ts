import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Ejercicios */
import { Ex1Component } from './exercises/ex1/ex1.component';
import { Ex2Component } from './exercises/ex2/ex2.component';
import { Ex3Component } from './exercises/ex3/ex3.component';
import { Ex4Component } from './exercises/ex4/ex4.component';

/* Directivas */
import { NgIfComponent } from './exercises/directivas/ng-if/ng-if.component';
import { ClickComponent } from './exercises/directivas/click/click.component';
import { NgforComponent } from './exercises/directivas/ngfor/ngfor.component';
import { NgSwitchNgStyleComponent } from './exercises/directivas/ng-switch-ng-style/ng-switch-ng-style.component';
import { TwdbComponent } from './exercises/directivas/twdb/twdb.component';
import { NgClassComponent } from './exercises/directivas/ng-class/ng-class.component';

/* Pipes */
import { MultiplicadorPipe } from './pipes/multiplicador.pipe';

/* Complejos */
import { FormsComponent } from './exercises/forms/forms.component';
import { PeticionesComponent } from './exercises/peticiones/peticiones.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplatesComponent } from './exercises/templates/templates.component';
import { PadreHijoComponent } from './exercises/comunicacion/padre-hijo/padre-hijo.component';
import { HijoPadreComponent } from './exercises/comunicacion/hijo-padre/hijo-padre.component';
import { PadreComponent } from './exercises/comunicacion/padre/padre.component';

@NgModule({
  declarations: [
    //pages

    //Components
    AppComponent,

    //pipes
    MultiplicadorPipe,

    //exercises
    Ex1Component,
    Ex2Component,

    //directivas
    NgIfComponent,
    ClickComponent,
    NgforComponent,
    NgSwitchNgStyleComponent,
    TwdbComponent,
    NgClassComponent,
    Ex3Component,
    Ex4Component,

    /* Complejos */
    FormsComponent,
    PeticionesComponent,
    TemplatesComponent,
    PadreHijoComponent,
    HijoPadreComponent,
    PadreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
