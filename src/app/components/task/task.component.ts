import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/models/interface/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {

@Input() task: ITask | undefined
@Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>;

deleteTask(): void {
  //Notifico al comp. superior la tarea a eliminar
  this.delete.emit(this.task);
}
}
