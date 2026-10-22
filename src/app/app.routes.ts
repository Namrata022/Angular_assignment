import { Routes } from '@angular/router';
import { Que2Component } from './pages/que2/que2.component';
import { Que5Component } from './pages/que5/que5.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Que7Component } from './pages/que7/que7.component';
import { Que8Component } from './pages/que8/que8.component';
import { Que9Component } from './pages/que9/que9.component';
import { Que10Component } from './pages/que10/que10.component';
import { Que11Component } from './pages/que11/que11.component';
import { Que12Component } from './pages/que12/que12.component';
import { Que13Component } from './pages/que13/que13.component';
import { Que14Component } from './pages/que14/que14.component';
import { Que15Component } from './pages/que15/que15.component';
import { Que16Component } from './pages/que16/que16.component';
import { Que17Component } from './pages/que17/que17.component';
import { Que18Component } from './pages/que18/que18.component';
import { HomeComponent } from './pages/que18/home/home.component';
import { AboutComponent } from './pages/que18/about/about.component';
import { ContactComponent } from './pages/que18/contact/contact.component';
import { Que19Component } from './pages/que19/que19.component';
import { StudentDetailComponent } from './pages/que19/student-detail/student-detail.component';
import { authGuard } from './guards/auth.guard';
import { Que20Component } from './pages/que20/que20.component';
import { AdminComponent } from './pages/que20/admin/admin.component';
import { Que21Component } from './pages/que21/que21.component';
import { Que22Component } from './pages/que22/que22.component';
import { Que23Component } from './pages/que23/que23.component';
import { Que24Component } from './pages/que24/que24.component';

export const routes: Routes = [
    {path:'que2',component:Que2Component},
    {path:'que5',component:Que5Component},
    {path:'que6',component:DashboardComponent},
    {path:'que7',component:Que7Component},
    {path:'que8',component:Que8Component},
    {path:'que9',component:Que9Component},
    {path:'que10',component:Que10Component},
    {path:'que11',component:Que11Component},
    {path:'que12',component:Que12Component},
    {path:'que13',component:Que13Component},
    {path:'que14',component:Que14Component},
    {path:'que15',component:Que15Component},
    {path:'que16',component:Que16Component},
    {path:'que17',component:Que17Component},
    {
      path:'que18',
      component:Que18Component,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent }
      ]
    },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'que19', component: Que19Component },
    { path: 'student/:id', component: StudentDetailComponent },
    { path: 'student', redirectTo: 'que19', pathMatch: 'full' },
    { path: 'que20', component: Que20Component },
    { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
    { path: 'que21', component: Que21Component },
    { path: 'que22', component: Que22Component },
    { path: 'que23', component: Que23Component },
    { path: 'que24', component: Que24Component }
];
