import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  imports: [],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css',
})
export class DirectivesDemoComponent {
  // *ngFor demo
  frutas = ['🍎 Manzana', '🍌 Plátano', '🍊 Naranja', '🍇 Uva', '🍓 Fresa'];
  
  // *ngIf demo
  isLoggedIn = true;
  userRole = 'admin';
  
  // *ngSwitch demo
  opcionActual = '1';
  
  // Dynamic styling
  isHighlighted = true;
  
  // TrackBy for performance
  items = [
    { id: 1, name: 'Item A' },
    { id: 2, name: 'Item B' },
    { id: 3, name: 'Item C' },
  ];
  
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  
  trackById(index: number, item: { id: number }) {
    return item.id;
  }
}
