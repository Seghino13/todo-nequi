import { Component, OnInit } from '@angular/core';
import { HeaderOptions } from 'src/app/models/header-options';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  headerOptions: HeaderOptions = {
    title: 'Configuración',
    hasIcon: false,
  };
  constructor() {}

  ngOnInit() {}
}
