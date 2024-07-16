import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from './task.module';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

 @Input({required:true}) task!:Task;
private tasksService= inject(TaskService)

 onCompleteTask(){
  this.tasksService.removeTask(this.task.id)
 }
}
