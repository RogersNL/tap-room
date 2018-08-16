import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'app-list-kegs',
  templateUrl: './list-kegs.component.html',
  styleUrls: ['./list-kegs.component.css']
})
export class ListKegsComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSold = new EventEmitter();
  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  soldButtonClicked(kegToEdit: Keg) {
    this.clickSold.emit(kegToEdit);
  }
}
