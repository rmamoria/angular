import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NewTaskData } from '../task/task.module';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string
  @Output() close = new EventEmitter<void>();

 

 private tasksService= inject(TaskService) ;

  enteredTitle='';
  enteredSummary='';
  enteredDate='';
 
 onCancel(){
   this.close.emit();
  }
  onSubmit() {
 

    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date:this.enteredDate
    }, this.userId);
    this.close.emit();
   

  }
}
