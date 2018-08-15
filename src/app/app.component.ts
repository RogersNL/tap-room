import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  kegs: Keg[] = [
    new Keg('Spicy Orange Dream', 'Bud Night', 11, 2, 98)
    new Keg('Caramel Banana Surprise', 'Willer Lite', 5, 2, 23)
    new Keg('Monster Grapefruit', 'Tres Equis', 33, 2, 111)
    new Keg('Graveyard Sunshine', 'Doors Lite', 4, 2, 24)
    new Keg('Organic Seaweed', 'Green Moon', 3, 2, 46)
    new Keg('Crazy Frog', 'Sudweiser', 1, 2, 50)
  ];
  kegName = null;
  kegBrand = null;
  kegPrice = null;
  kegContent = null;
  kegPints = null;

  submit(){
    this.kegs.push(new Keg(this.kegName, this.kegBrand, this.kegPrice, this.kegContent, this.kegPints))
  }
  sold(currentKeg){
    if(currentKeg.pintsLeft > 0){
      currentKeg.pintsLeft -= 1;
    }
  }
    selectedKeg= null;
  editTask(currentKeg) {
    this.selectedKeg= currentKeg;
  }
  finishedEditing() {
    console.log(this.kegs);
  this.selectedKeg= null;
}
}
