import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input:Keg[], desiredFilter){
    let output: Keg[]=[];
    if(desiredFilter==="lowPints"){
      for(let i=0; i<input.length; i++){
        if(input[i].pintsLeft<10){
          output.push(input[i]);
        }
      }
      return output;

    } else if(desiredFilter==="lowPrice") {
      for(let i=0; i<input.length; i++){
        if(input[i].price<10){
          output.push(input[i]);
        }
    }
    return output;
  }
  else{
    return input;
  }
}
