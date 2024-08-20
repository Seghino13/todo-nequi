import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { HeaderOptions } from 'src/app/models/header-options';
import { TypeModal } from 'src/app/models/modal.enum';
import { Tasks } from 'src/app/models/tasks.interface';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  headerOptions: HeaderOptions = {
    title: 'To Do',
    hasIcon: false,
    icon: 'options-outline',
  };
  @ViewChild(IonModal) modal?: IonModal;
  currentModal?: string;
  typeModal = TypeModal;
  tasks: Tasks[] = [];
  search: string = '';
  constructor(
    private router: Router,
    private tasksService: TasksService,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getTasks();
  }
  getTasks() {
    this.tasks = this.tasksService.getTasks();
    this.tasks = this.tasks.sort((a, b) => {
      const dateA = new Date(a.endDate).getTime();
      const dateB = new Date(b.endDate).getTime();
      return dateA - dateB;
    });
  }

  page($event: string) {
    this.router.navigate([$event]);
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm(event: boolean) {
    if (!event) return;
    this.modal?.dismiss();
    this.getTasks();
  }

  openModal($event: string) {
    this.modal?.present();
    this.currentModal = $event;
  }

  deleteTask($event: Tasks) {
    this.tasksService.deleteCategory($event);
    this.getTasks();
  }

  checkTask($event: Tasks) {
    this.tasksService.checkTask($event);
    this.getTasks();
  }
}
