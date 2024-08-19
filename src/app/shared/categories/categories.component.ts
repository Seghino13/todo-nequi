import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() categorySelected?: Category;
  color: string = this.utilsService.randomColor();

  createCategoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    color: new FormControl(this.color, Validators.required),
  });

  constructor(
    private categoriesService: CategoriesService,
    private utilsService: UtilsService,
  ) {}

  ngOnInit() {
    this.editCategory();
  }

  editCategory() {
    if (!this.categorySelected) return;
    this.color = this.categorySelected.color;
    this.createCategoryForm.setValue({
      name: this.categorySelected.name,
      color: this.categorySelected.color,
    });
  }

  createCategory() {
    if (!this.createCategoryForm.valid) return;
    const valueForm = this.createCategoryForm?.value as Category;
    valueForm.color = this.color;
    if (this.categorySelected) {
      valueForm.id = this.categorySelected.id;
      this.updateCategory(valueForm);
      return;
    }

    this.categoriesService.setCategories(valueForm);
    this.closeModal.emit(true);
  }

  updateCategory(valueForm: Category) {
    this.categoriesService.updateCategoryById(valueForm);
    this.closeModal.emit(true);
  }
}
