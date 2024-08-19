import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.interface';
import { Tasks } from 'src/app/models/tasks.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { TasksService } from 'src/app/services/tasks.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  createTaskForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl(''),
    endDate: new FormControl(''),
  });
  listCategoires: Category[] = [];
  date?: string = this.utilService.formatDateToISOWithoutMilliseconds(
    new Date(),
  );
  constructor(
    private categoriesService: CategoriesService,
    private utilService: UtilsService,
    private tasksService: TasksService,
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.listCategoires = this.categoriesService.getCategories();
  }

  createTask() {
    if (!this.createTaskForm.valid) return;
    const valueForm = this.createTaskForm?.value as Tasks;
    valueForm.endDate = String(this.date);
    valueForm.completed = false;
    this.tasksService.setTasks(valueForm);
    this.closeModal.emit(true);
    this.utilService.presentToast('Categoria creada...');
  }
}
