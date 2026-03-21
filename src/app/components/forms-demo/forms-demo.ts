import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms-demo.html',
  styleUrl: './forms-demo.css',
})
export class FormsDemoComponent {
  // Template-driven form (ngModel)
  contacto = {
    nombre: 'Rodney Polanco',
    email: 'rodneypoalnco81@gmail.com',
    mensaje: 'Angular es lo maximo'
  };
  
  // Reactive form
  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    pais: new FormControl('', Validators.required),
  });
  
  paises = ['🇲🇽 México', '🇨🇴 Colombia', '🇪🇸 España', '🇺🇸 Estados Unidos', '🇦🇷 Argentina', "ᴿᴰ Rep Dominicana"];
  
  submittedContacts: { nombre: string; email: string; mensaje: string }[] = [];
  
  // Contact form submission
  enviarContacto() {
    if (this.contacto.nombre && this.contacto.email && this.contacto.mensaje) {
      this.submittedContacts.push({ ...this.contacto });
      this.contacto = { nombre: '', email: '', mensaje: '' };
      alert('¡Mensaje enviado!');
    }
  }
  
  // Reactive form submission
  onSubmitReactive() {
    if (this.registroForm.valid) {
      console.log('Formulario válido:', this.registroForm.value);
      alert('¡Registro exitoso!');
      this.registroForm.reset();
    } else {
      console.log('Formulario inválido');
      this.markAllAsTouched();
    }
  }
  
  markAllAsTouched() {
    Object.keys(this.registroForm.controls).forEach(key => {
      this.registroForm.get(key)?.markAsTouched();
    });
  }
  
  // Validation helpers
  isInvalid(field: string) {
    const control = this.registroForm.get(field);
    return control?.invalid && control?.touched;
  }
  
  getError(field: string) {
    const control = this.registroForm.get(field);
    if (control?.errors?.['required']) return 'Este campo es requerido';
    if (control?.errors?.['email']) return 'Email inválido';
    if (control?.errors?.['minlength']) return `Mínimo ${control.errors['minlength'].requiredLength} caracteres`;
    return '';
  }
}
