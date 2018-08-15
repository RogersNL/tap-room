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
    new Keg('Spicy Orange', 'Bud Night', 11, 2, 124)
  ];
  selectedTask = null;
  submit(){
    this.kegs.push(new Keg(this.kegName, this.kegBrand, this.kegPrice, this.kegContent, this.kegPints))
  }
  editTask(clickedTask) {
      this.selectedTask = clickedTask;
    }
    finishedEditing() {
    this.selectedTask = null;
  }
}
