import { Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ChildAComponent } from './pages/child-a/child-a.component';
import { ChildBComponent } from './pages/child-b/child-b.component';

export const routes: Routes = [
    {
        path: 'first-component', 
        component: FirstComponent,
        children: [
            {
                path: 'child-a',
                component: ChildAComponent
            },
            {
                path: 'child-b',
                component: ChildBComponent
            },
        ]
    },
    {path: 'second-component', component: SecondComponent},
];
