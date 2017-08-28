import {Component} from '@angular/core';
import {Player} from './player';
import {PlayerService } from './player.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-players',
  templateUrl: `./players.component.html`,
  styleUrls: ['./players.component.css']
})


export class PlayersComponent  implements OnInit { 
  title = 'List';
  players: Player[];
  selectedPlayer: Player;
  
  constructor(private router: Router, private playerService: PlayerService) { }


  gotoDetail(): void {
    this.router.navigate(['detail',this.selectedPlayer.id]);
    }


  getPlayers(): void {
    this.playerService.getPlayers().then(players=>
       this.players = players);
  }

  ngOnInit(): void{
    this.getPlayers();
  }

  onSelect(player:Player):void {
    this.selectedPlayer = player;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return; }
    this.playerService.create(name).then(player => { this.players.push(player);
    this.selectedPlayer = null;});
  }

  delete(player: Player): void {
    this.playerService.delete(player.id).then(() => {
      this.players = this.players.filter(h => h !== player);
      if (this.selectedPlayer === player) {
        this.selectedPlayer = null;}
    });
  }
}