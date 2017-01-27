import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Player } from './player.model';

@Pipe({
  name: 'position',
  pure: false
})
export class PositionPipe implements PipeTransform {

  transform(input: Player[], position: string){
  var output: Player[] = [];
  if(position === "guard") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].position === guard) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (position === "forward") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].position === forward) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (position === "center") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].position === center) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}

}
