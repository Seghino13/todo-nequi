import { Injectable } from '@angular/core';
import { LocalStorageServices } from '../models/local-storage-services.enum';
import { Category } from '../models/category.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getCategories(): Category[] {
    const getCategories = localStorage.getItem(LocalStorageServices.CATEGORIES);
    if (getCategories) {
      return JSON.parse(getCategories) as Category[];
    }
    return [] as Category[];
  }

  setCategories(category: Category) {
    category.id = uuidv4();
    const categoryService = this.getCategories();

    const listCategory: Category[] = [];
    listCategory.push(category);
    if (categoryService.length === 0) {
      this.saveCategory(listCategory);
      return;
    }
    this.updateCategory(category);
  }

  saveCategory(category: Category[]) {
    const categoryToString = JSON.stringify(category);
    localStorage.setItem(LocalStorageServices.CATEGORIES, categoryToString);
  }

  updateCategory(category: Category) {
    const categoryService: Category[] = this.getCategories();
    categoryService.push(category);
    this.saveCategory(categoryService);
  }

  deleteCategory(category: Category) {
    const categoryService: Category[] = this.getCategories();
    const filter = categoryService.filter((item) => item.id !== category.id);
    this.saveCategory(filter);
  }

  updateCategoryById(category: Category) {
    const categoryService: Category[] = this.getCategories();

    categoryService.forEach((item) => {
      if (item.id === category.id) {
        item.name = category.name;
        item.color = category.color;
      }
    });

    this.saveCategory(categoryService);
  }
}
