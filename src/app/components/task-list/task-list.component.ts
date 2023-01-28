import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interface/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
//TODO: reformular como lista de tareas y no inicialzarlas asi
task1 : ITask = {
  title: 'Tarea 1',
  desc: 'Descripcion de la tardea',
  completed: false,
  level: Levels.Info
}

task2 : ITask = {
  title: 'Tarea 2',
  desc: 'Descripcion de la tarea',
  completed: true,
  level: Levels.Urgent
}

deleteTask(task: ITask){
  //TODO: sustituir por un splice para eliminar de la lista de tareas
  alert(`Se procede a eliminar la tarea: ${task.title}`);
}
}
