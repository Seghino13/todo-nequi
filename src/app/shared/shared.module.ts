import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TaskControlComponent } from './task-control/task-control.component';
import { CategoriesComponent } from './categories/categories.component';
import { TasksComponent } from './tasks/tasks.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoCardComponent,
    TaskControlComponent,
    CategoriesComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    TodoCardComponent,
    TaskControlComponent,
    CategoriesComponent,
    TasksComponent,
  ],
})
export class SharedModule {}
