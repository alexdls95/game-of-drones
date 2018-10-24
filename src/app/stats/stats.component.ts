import { Component, OnInit } from '@angular/core';
import { Player } from '../auth/player.model';
import { PlayerService } from '../auth/player.service';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    providers: [PlayerService]
})



export class StatsComponent implements OnInit {
    constructor(
        private playerService: PlayerService
    ) {}

    players: Player[];

    ngOnInit() {
        this.playerService.getPlayers()
        .then((players: Player[]) => {
            this.players = players.sort((a, b) =>  b.rank - a.rank);
        })
        .catch(error => console.log(error));
    }
}
