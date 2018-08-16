import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'app-create-keg',
  templateUrl: './create-keg.component.html',
  styleUrls: ['./create-keg.component.css']
})
export class CreateKegComponent {
  kegName = null;
  kegBrand = null;
  kegPrice = null;
  kegContent = null;
  kegPints = null;
  @Input() childKegList: Keg[];
  @Output() sendKeg = new EventEmitter();
  submit(name: string, brand: string, price: number, alcoholContent: number, pintsLeft: number){
    let newKeg: Keg = new Keg(name, brand, price, alcoholContent, pintsLeft);
    this.sendKeg.emit(newKeg);
  }
}
