import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { TeamService } from '../team.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TeamService]
})
export class AdminComponent {

  constructor(private teamService: TeamService) { }

submitForm(name: string, image: string, position: string, college: string) {
  var newPlayer: Player = new Player(name, image, position, college);
  this.teamService.addPlayer(newPlayer);
}

}
