import { NgModule } from "@angular/core";
import { Module1RoutingModule } from "./module1-routing.module";
import { Component1Component } from "../components/component1.component";
import { Component2Component } from "../components/component2.component";

@NgModule({
    declarations: [Component1Component, Component2Component],
    imports: [Module1RoutingModule]
})

export class Module1Module {

}