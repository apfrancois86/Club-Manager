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

  beginUpdatingPlayer(playerToUpdate){
    this.teamService.updatePlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete){
    if(confirm("Are you sure you want to delete this player from the roster?")){
      this.teamService.deletePlayer(playerToDelete);
    }
  }


}
