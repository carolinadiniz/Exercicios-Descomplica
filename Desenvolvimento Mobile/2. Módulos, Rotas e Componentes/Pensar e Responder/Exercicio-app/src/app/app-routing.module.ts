import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module1RoutingModule } from './module1/module1-routing.module';
import { Module2RoutingModule } from './module2/module2-routing.module';

const routes: Routes = [
  {path: 'module1', loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module)},
  {path: 'module2', loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), Module1RoutingModule, Module2RoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
