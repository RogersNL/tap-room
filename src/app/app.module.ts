import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { CreateKegComponent } from './create-keg/create-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { SellPintComponent } from './sell-pint/sell-pint.component';
import { FilterKegsComponent } from './filter-kegs/filter-kegs.component';
import { ListKegsComponent } from './list-kegs/list-kegs.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateKegComponent,
    EditKegComponent,
    SellPintComponent,
    FilterKegsComponent,
    ListKegsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
