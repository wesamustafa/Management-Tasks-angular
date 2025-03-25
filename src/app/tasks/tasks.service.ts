import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
tasks = signal<Task[]>([]);
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
