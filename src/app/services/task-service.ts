import { Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Signals para estado reactivo
  tasks = signal<Task[]>([
    { id: 1, title: 'Editar el codigo', completed: true },
    { id: 2, title: 'Crear un demo completo', completed: false },
    { id: 3, title: 'Aplicar al puesto Full Stack', completed: false },
  ]);
  
  addTask(title: string) {
    const newTask: Task = {
      id: this.tasks().length + 1,
      title,
      completed: false,
    };
    this.tasks.update(tasks => [...tasks, newTask]);
  }
  
  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  
  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }
  
  getCompletedCount() {
    return this.tasks().filter(t => t.completed).length;
  }
}
