import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Card } from './card/card';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
{path:'' , redirectTo: 'home' , pathMatch: 'full'},
{path:'home' , component:Home ,title: 'home page'},
{path:'about' , component:About ,title: 'about page'},
{path:'card' , component:Card ,title: 'card page'},
{path:'**' , component:Notfound ,title: 'not found'},
];
