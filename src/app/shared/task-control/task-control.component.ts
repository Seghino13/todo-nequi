import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TypeModal } from 'src/app/models/modal.enum';

@Component({
  selector: 'app-task-control',
  templateUrl: './task-control.component.html',
  styleUrls: ['./task-control.component.scss'],
})
export class TaskControlComponent implements OnInit {
  @Output() modal = new EventEmitter<string>();
  typeModal = TypeModal;
  constructor() {}

  ngOnInit() {}

  openModal(modal: string) {
    this.modal.emit(modal);
  }
}
