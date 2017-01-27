import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Player } from './player.model';

@Pipe({
  name: 'position',
  pure: false
})
export class PositionPipe implements PipeTransform {

  transform(input: any[], thisPosition: string){
  var output: any[] = [];
  if(thisPosition === "Guard") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].position === "Guard") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (thisPosition === "Forward") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].position === "Forward") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (thisPosition === "Center") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].position === "Center") {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}

}
