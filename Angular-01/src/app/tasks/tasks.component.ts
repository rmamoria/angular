import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import tasks from "../dummy-tasks";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.module';
import { TaskService } from './task.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!:string;
  @Input({required:true}) name?:string;
  isAddingTask = false;

constructor(private tasksService: TaskService){}
  
  get selectedUserTasks(){
    return  this.tasksService.getUserTasks(this.userId)
  }

 

  newTask() {
    this.isAddingTask = !this.isAddingTask;
  }
  onStartAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }
  onCloseAddTask(){
    this.isAddingTask=false;
  }


}
