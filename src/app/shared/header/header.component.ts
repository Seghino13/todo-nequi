import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderOptions } from 'src/app/models/header-options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerOptions?: HeaderOptions;
  @Output() page = new EventEmitter<string>();
  constructor() {}
  ngOnInit() {}

  actionClick() {
    this.page.emit('/settings');
  }
}
