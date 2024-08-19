import { Injectable } from '@angular/core';
import { Tasks } from '../models/tasks.interface';
import { LocalStorageServices } from '../models/local-storage-services.enum';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  getTasks(): Tasks[] {
    const getTasks = localStorage.getItem(LocalStorageServices.TASKS);
    if (getTasks) {
      return JSON.parse(getTasks) as Tasks[];
    }
    return [] as Tasks[];
  }

  setTasks(task: Tasks) {
    task.id = uuidv4();
    const categoryService = this.getTasks();

    const listTasks: Tasks[] = [];
    listTasks.push(task);
    if (categoryService.length === 0) {
      this.saveTask(listTasks);
      return;
    }
    this.updateTask(task);
  }

  saveTask(task: Tasks[]) {
    const taskToString = JSON.stringify(task);
    localStorage.setItem(LocalStorageServices.TASKS, taskToString);
  }

  updateTask(task: Tasks) {
    const categoryService: Tasks[] = this.getTasks();
    categoryService.push(task);
    this.saveTask(categoryService);
  }

  deleteCategory(task: Tasks) {
    const categoryService: Tasks[] = this.getTasks();
    const filter = categoryService.filter((item) => item.id !== task.id);
    this.saveTask(filter);
  }

  updatecategoryById(task: Tasks) {
    const categoryService: Tasks[] = this.getTasks();

    categoryService.forEach((item) => {
      if (item.id === task.id) {
        item.name = task.name;
        item.description = task.description;
        item.endDate = task.endDate;
        item.category = task.category;
      }
    });

    this.saveTask(categoryService);
  }

  checkTask(task: Tasks) {
    const categoryService: Tasks[] = this.getTasks();
    categoryService.forEach((item) => {
      if (item.id === task.id) {
        item.completed = !task.completed;
      }
    });
    this.saveTask(categoryService);
  }
}
