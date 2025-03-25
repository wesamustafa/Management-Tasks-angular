import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
private tasks = signal<Task[]>([]);
allTasks = this.tasks.asReadonly();

  constructor() { }
  //add task
  addTask(tasksData:{title:string, description:string}){
    const newTask:Task = {
      ...tasksData,
      id:Math.random().toString(),
      status:'OPEN'
    };
    this.tasks.update((oldTask)=> [...oldTask, newTask]);
  }
  //update task status
  updateTaskStatus(taskId:string, newStatus:TaskStatus){
    this.tasks.update((oldTasks)=> oldTasks.map((task)=> task.id === taskId ? {...task, status:newStatus} : task))
  }
  
}
