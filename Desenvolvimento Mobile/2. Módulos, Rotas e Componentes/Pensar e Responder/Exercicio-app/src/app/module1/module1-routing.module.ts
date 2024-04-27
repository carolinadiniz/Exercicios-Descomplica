import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Component1Component } from "../components/component1.component";
import { Component2Component } from "../components/component2.component";

const module1Routes: Routes = [
    { path: 'component1', component: Component1Component},
    { path: 'component2', component: Component2Component}
]

@NgModule({
    imports: [RouterModule.forChild(module1Routes)],
    exports: [RouterModule]
})

export class Module1RoutingModule {

}