import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  masterKegList: Keg[] = [
    new Keg('Spicy Orange Dream', 'Bud Night', 11, 2, 98),
    new Keg('Caramel Banana Surprise', 'Willer Lite', 5, 2, 23),
    new Keg('Monster Grapefruit', 'Tres Equis', 33, 2, 111),
    new Keg('Graveyard Sunshine', 'Doors Lite', 4, 2, 24),
    new Keg('Organic Seaweed', 'Green Moon', 3, 2, 46),
    new Keg('Crazy Frog', 'Sudweiser', 1, 2, 50)
  ];
    selectedKeg: Keg = null;
  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
  addNewKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }
  sold(currentKeg){
    if(currentKeg.pintsLeft > 0){
      currentKeg.pintsLeft -= 1;
    }
  }

}
