# Angular Demo - Proyecto de Aprendizaje

## 📚 Descripción

Este es un proyecto demo de Angular 19+ creado para demostrar los fundamentos de Angular para una solicitud de empleo como **Desarrollador Full Stack**.

El proyecto incluye ejemplos prácticos de los conceptos más importantes de Angular.

## 🚀 Cómo ejecutar

```bash
# Navegar al directorio del proyecto
cd angular-demo

# Instalar dependencias (ya instalado)
npm install

# Iniciar el servidor de desarrollo
ng serve
```

Luego abre tu navegador en **http://localhost:4200/**

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── bindings-demo/      # Demostración de bindings
│   │   ├── services-demo/      # Demostración de servicios
│   │   ├── directives-demo/     # Demostración de directivas
│   │   └── forms-demo/         # Demostración de formularios
│   ├── services/
│   │   └── task-service.ts     # Ejemplo de servicio
│   ├── app.ts                  # Componente principal
│   ├── app.routes.ts           # Rutas de la aplicación
│   └── app.html               # Template principal
└── styles.css                  # Estilos globales
```

## 📖 Contenido de las Demostraciones

### 1. 🔗 Bindings (`/bindings`)
Demuestra los diferentes tipos de binding en Angular:
- **String Interpolation**: `{{ variable }}`
- **Property Binding**: `[propiedad]="valor"`
- **Event Binding**: `(evento)="metodo()"`
- **Two-way Binding**: `[(ngModel)]`
- **Style Binding**: `[style.propiedad]`

### 2. ⚙️ Services (`/services`)
Demuestra la inyección de dependencias y el patrón de servicios:
- Creación de servicios con `@Injectable`
- Uso de Signals para estado reactivo
- Inyección en componentes con `inject()`
- CRUD básico con un listado de tareas

### 3. ✨ Directives (`/directives`)
Demuestra las directivas estructurales y de atributos:
- **`@for`**: Iterar sobre listas
- **`@if`**: Condicionales
- **`@switch`**: Múltiples casos
- **Class Binding**: `[class.nombre]`
- **TrackBy**: Optimización de rendimiento

### 4. 📝 Forms (`/forms`)
Demuestra ambos tipos de formularios en Angular:
- **Template-driven**: Con `ngModel`
- **Reactive Forms**: Con `FormGroup` y validaciones
- Validaciones básicas y errores
- Comparación de ambos enfoques

## 🔧 Conceptos Clave de Angular 19+

### Signals (Reactividad)
```typescript
// Signals para estado reactivo
count = signal(0);

// Actualizar signal
count.update(c => c + 1);

// Leer valor
count(); // 1
```

### Standalone Components
```typescript
@Component({
  selector: 'app-demo',
  imports: [CommonModule],  // Importar módulos necesarios
  templateUrl: './demo.html',
})
export class DemoComponent {}
```

### New Control Flow Syntax
```typescript
// Nueva sintaxis (más legible)
@if (condition) {
  <p>True</p>
} @else {
  <p>False</p>
}

@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
}
```

## 🎯 Personalización para tu Portafolio

Para adaptar este demo a tu portafolio profesional:

1. **Cambia los colores** en los archivos CSS (busca `#e94560`, `#0f4c75`, etc.)
2. **Actualiza los textos** para que reflejen tu información
3. **Agrega tus propios proyectos** en el componente de servicios
4. **Personaliza el nombre** y branding en `app.ts`

## 📚 Recursos para Aprender Angular

- [Documentación oficial de Angular](https://angular.dev/)
- [Tutorial interactivo](https://angular.dev/tutorials)
- [Angular CLI](https://angular.dev/tools/cli)
- [Best Practices](https://angular.dev/guide/styleguide)

## 💼 Para la Entrevista

Puntos clave para mencionar:
- ✅ Experiencia con Angular 19+ (signals, standalone components)
- ✅ Entendimiento de TypeScript
- ✅ Patrones de inyección de dependencias
- ✅ Estado reactivo con signals
- ✅ Forms (template-driven y reactive)
- ✅ Componentes y servicios bien estructurados

## 📝 Notas

- Este proyecto usa **Angular 19+** con la nueva sintaxis de control flow
- Los componentes son **standalone** (sin NgModules)
- Se usa **signals** para estado reactivo (nueva característica)
- El routing implementa **lazy loading** con `loadComponent`

---

**Creado por:** Rodney Polanco
**Para:** Solicitud de empleo Full Stack Developer
**Fecha:** Marzo 2026
