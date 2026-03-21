import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../../services/task-service';

@Component({
  selector: 'app-services-demo',
  imports: [FormsModule],
  templateUrl: './services-demo.html',
  styleUrl: './services-demo.css',
})
export class ServicesDemoComponent {
  taskService = inject(TaskService);
  newTaskTitle = 'Rodney Was Here';
  
  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle.trim());
      this.newTaskTitle = '';
    }
  }
  
  toggleTask(task: Task) {
    this.taskService.toggleTask(task.id);
  }
  
  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
  }
}
