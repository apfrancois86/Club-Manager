import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TeamService {
  player: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.player = angularFire.database.list('players');
  }

  getPlayers(){
    return this.player;
  }

  addPlayer(newPlayer: Player) {
    this.player.push(newPlayer);
  }

  getPlayerById(playerId: string){
    return this.angularFire.database.object('players/' + playerId);
  }
}
