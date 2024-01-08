import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1Component } from './exercises/ex1/ex1.component';
import { Ex2Component } from './exercises/ex2/ex2.component';
import { ClickComponent } from './exercises/directivas/click/click.component';
import { NgSwitchNgStyleComponent } from './exercises/directivas/ng-switch-ng-style/ng-switch-ng-style.component';
import { NgforComponent } from './exercises/directivas/ngfor/ngfor.component';
import { TwdbComponent } from './exercises/directivas/twdb/twdb.component';
import { NgClassComponent } from './exercises/directivas/ng-class/ng-class.component';
import { NgIfComponent } from './exercises/directivas/ng-if/ng-if.component';

const routes: Routes = [
  {
    path: 'exer', children: [
      { path: 'ex1', component: Ex1Component },
      { path: 'ex1/:id', component: Ex1Component },
      { path: 'ex2', component: Ex2Component },
    ]
  },
  {
    path: 'direct', children: [
      { path: 'click', component: ClickComponent },
      { path: 'ngclass', component: NgClassComponent },
      { path: 'ngif', component: NgIfComponent },
      { path: 'ngswitch', component: NgSwitchNgStyleComponent },
      { path: 'ngstyle', component: NgSwitchNgStyleComponent },
      { path: 'ngfor', component: NgforComponent },
      { path: 'twdb', component: TwdbComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
