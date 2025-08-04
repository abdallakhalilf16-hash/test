import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Footer } from './footer/footer';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,Navbar ,Home ,About ,Footer ,Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sacoundapp');
}
