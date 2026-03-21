import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings-demo',
  imports: [FormsModule],
  templateUrl: './bindings-demo.html',
  styleUrl: './bindings-demo.css',
})
export class BindingsDemoComponent {
  // String interpolation
  title = 'Demostración de Bindings en Angular';
  version = 19;
  
  // Property binding
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled = false;
  
  // Event binding
  clickCount = signal(0);
  
  // Two-way binding
  userName = 'Rodney Polanco';
  userEmail = 'rodneypolanco81@gmail.com';
  
  // Style binding
  textColor = '#04990b';
  
  onButtonClick() {
    this.clickCount.update(count => count + 1);
  }
  
  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }
}
