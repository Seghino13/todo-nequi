import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { HeaderOptions } from 'src/app/models/header-options';
import { TypeModal } from 'src/app/models/modal.enum';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  headerOptions: HeaderOptions = {
    title: 'To Do',
    hasIcon: true,
    icon: 'options-outline',
  };
  @ViewChild(IonModal) modal?: IonModal;
  currentModal?: string;
  typeModal = TypeModal;
  constructor(private router: Router) {}

  ngOnInit() {}

  page($event: string) {
    this.router.navigate([$event]);
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm(event: boolean) {
    if (!event) return;
    this.modal?.dismiss();
  }

  openModal($event: string) {
    this.modal?.present();
    this.currentModal = $event;
  }
}
