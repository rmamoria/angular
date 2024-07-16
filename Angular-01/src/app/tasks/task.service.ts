import { Injectable } from '@angular/core';
import dummyTasks from '../dummy-tasks';
import { NewTaskData } from './task/task.module';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private tasks = dummyTasks;



 constructor(){

  const tasks = localStorage.getItem('tasks');

  if(tasks){
    this.tasks=JSON.parse(tasks);
  }
 }
 getUserTasks(userId:string){
   return this.tasks.filter((task)=>task.userId===userId)

 }

 addTask(taskData:NewTaskData, userId:string){
  this.tasks.unshift({
    id:new Date().getTime().toString(),
    userId:userId,
    title:taskData.title,
    summary:taskData.summary,
    dueDate:taskData.date

  })
  this.saveTask();
 }

 removeTask(id:string){
  this.tasks=this.tasks.filter((task)=>task.id!=id)
  this.saveTask();

 }

 private saveTask(){
  localStorage.setItem('tasks',JSON.stringify(this.tasks))
 }

}
