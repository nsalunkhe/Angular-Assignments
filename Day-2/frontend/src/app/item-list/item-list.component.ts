import { Component, Input } from '@angular/core';

interface Task {
  text: string;
  editing: boolean;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ text: this.newTask, editing: false });
      this.newTask = '';
    }
  }

  toggleEdit(task: Task) {
    task.editing = !task.editing;
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  updateTask(task: Task) {
    task.editing = false;
  }
}
