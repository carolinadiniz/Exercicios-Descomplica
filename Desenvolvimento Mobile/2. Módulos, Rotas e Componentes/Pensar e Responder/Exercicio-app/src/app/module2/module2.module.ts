import { NgModule } from "@angular/core";
import { Module2RoutingModule } from "./module2-routing.module";
import { Component3Component } from "../components/component3.component";
import { Component4Component } from "../components/component4.component";

@NgModule({
    declarations: [Component3Component, Component4Component],
    imports: [Module2RoutingModule]
})

export class Module2Module {

}