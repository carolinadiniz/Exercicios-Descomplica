import { NgModule } from "@angular/core";
import { FirstComponent } from "../pages/first/first.component";
import { SecondComponent } from "../pages/second/second.component";
import { RouterModule } from "@angular/router";
import { ChildAComponent } from "../pages/child-a/child-a.component";
import { ChildBComponent } from "../pages/child-b/child-b.component";

@NgModule({
    imports: [RouterModule],
    declarations: [FirstComponent, SecondComponent, ChildAComponent, ChildBComponent],
    exports: [FirstComponent, SecondComponent, ChildAComponent, ChildBComponent ],
})
export class ModuleComponent {

}