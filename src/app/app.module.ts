import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnakePipe } from './pipes/snake.pipe';
import { Ex1Component } from './exercises/ex1/ex1.component';
import { NgIfComponent } from './exercises/directivas/ng-if/ng-if.component';
import { ClickComponent } from './exercises/directivas/click/click.component';
import { Ex2Component } from './exercises/ex2/ex2.component';
import { NgforComponent } from './exercises/directivas/ngfor/ngfor.component';
import { NgSwitchNgStyleComponent } from './exercises/directivas/ng-switch-ng-style/ng-switch-ng-style.component';
import { TwdbComponent } from './exercises/directivas/twdb/twdb.component';
import { NgClassComponent } from './exercises/directivas/ng-class/ng-class.component';
import { Ex3Component } from './exercises/ex3/ex3.component';
import { Ex4Component } from './exercises/ex4/ex4.component';
import { MultiplicadorPipe } from './pipes/multiplicador.pipe';

@NgModule({
  declarations: [
    //pages

    //Components
    AppComponent,

    //pipes
    SnakePipe,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
