import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
private tasks = signal<Task[]>([]);
allTasks = this.tasks.asReadonly();

  constructor() { }
  addTask(tasksData:{title:string, description:string}){
    const newTask:Task = {
      ...tasksData,
      id:Math.random().toString(),
      status:'OPEN'
    };
    this.tasks.update((oldTask)=> [...oldTask, newTask]);
  }
  
}
