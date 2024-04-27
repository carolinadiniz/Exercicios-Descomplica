import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Component3Component } from "../components/component3.component";
import { Component4Component } from "../components/component4.component";

const module2Routes: Routes = [
    { path: 'component3', component: Component3Component},
    { path: 'component4', component: Component4Component}
]

@NgModule({
    imports: [RouterModule.forChild(module2Routes)],
    exports: [RouterModule]
})

export class Module2RoutingModule {

}