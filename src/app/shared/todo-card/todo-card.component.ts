import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category.interface';
import { Tasks } from 'src/app/models/tasks.interface';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  showMore: boolean = false;
  @Input() task?: Tasks;
  @Output() deleteTask = new EventEmitter<Tasks>();
  @Output() completeTaks = new EventEmitter<Tasks>();
  currenCategory?: Category;

  checkForm = new FormGroup({
    check: new FormControl(false, []),
  });

  check: boolean = false;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.getCurrentCategory();
    this.checkForm.setValue({
      check: this.task?.completed ?? false,
    });
    this.checkForm.valueChanges.subscribe(() => {
      this.markTask();
    });
  }

  getCurrentCategory() {
    if (!this.task) return;
    const categories: Category[] = this.categoriesService.getCategories();
    this.currenCategory = categories.find(
      (item) => item.id === this.task?.category,
    );
  }
  showMoreAction() {
    this.showMore = !this.showMore;
  }

  delete() {
    this.deleteTask.emit(this.task);
  }

  markTask() {
    this.completeTaks.emit(this.task);
  }
}
