import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService]
})

export class TeamComponent implements OnInit {
  player: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private teamService: TeamService){}

  ngOnInit(){
    this.player = this.teamService.getPlayers();
  }

  goToDetailPage(clickedPlayer) {
     this.router.navigate(['players', clickedPlayer.$key]);
   };

}
