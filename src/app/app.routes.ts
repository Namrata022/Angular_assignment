import { Routes } from '@angular/router';
import { Que2Component } from './pages/que2/que2.component';
import { Que5Component } from './pages/que5/que5.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Que7Component } from './pages/que7/que7.component';
import { Que8Component } from './pages/que8/que8.component';
import { Que9Component } from './pages/que9/que9.component';
import { Que10Component } from './pages/que10/que10.component';

export const routes: Routes = [
    {path:'que2',component:Que2Component},
    {path:'que5',component:Que5Component},
    {path:'que6',component:DashboardComponent},
    {path:'que7',component:Que7Component},
    {path:'que8',component:Que8Component},
    {path:'que9',component:Que9Component},
    {path:'que10',component:Que10Component}
];
