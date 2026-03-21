import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Demo - Full Stack';
  navLinks = [
    { path: '/bindings', label: 'Bindings', icon: '🔗' },
    { path: '/services', label: 'Services', icon: '⚙️' },
    { path: '/directives', label: 'Directives', icon: '✨' },
    { path: '/forms', label: 'Forms', icon: '📝' },
  ];
}
