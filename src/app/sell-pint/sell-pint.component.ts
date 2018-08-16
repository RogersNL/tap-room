import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'app-sell-pint',
  templateUrl: './sell-pint.component.html',
  styleUrls: ['./sell-pint.component.css']
})
export class SellPintComponent {
  @Input() childSelectedKeg: Keg;
  @Output() newPint = new EventEmitter();
  sold(currentKeg){
    if(currentKeg.pintsLeft > 0){
      currentKeg.pintsLeft -= 1;
    }
  }
}
