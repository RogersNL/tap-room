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
  pintsLeft(currentKeg:Keg){
    if(currentKeg.pintsLeft<=0){
      return "bg-danger";
    }else if(currentKeg.pintsLeft<=10){
      return "bg-warning";
    }else{
      return "bg-success";
    }
  }
  desiredFilter: string = "allBeer";

  onChange(optionFromMenu) {
    this.desiredFilter = optionFromMenu;
  }
}
