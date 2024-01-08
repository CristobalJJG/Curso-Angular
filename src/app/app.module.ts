import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnakePipe } from './pipes/snake.pipe';
import { Ex1Component } from './exercises/ex1/ex1.component';

@NgModule({
  declarations: [
    //pages

    //Components
    AppComponent,

    //pipes
    SnakePipe,

    //exercises
    Ex1Component,
    Ex2Component,

    //directivas
    NgIfComponent,
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
