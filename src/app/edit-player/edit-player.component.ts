import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [TeamService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  beginUpdatingAlbum(playerToUpdate){
    this.teamService.updatePlayer(playerToUpdate);
  }


}
