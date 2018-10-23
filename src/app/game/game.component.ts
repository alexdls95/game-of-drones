import { Component, OnInit } from '@angular/core';
import { Round } from './round.model';
import { Player } from '../auth/player.model';
import { Move } from './move.model';
import { MoveService } from './move.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GameService } from './game.service';
import { Game } from './game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css', '../app.component.css'],
  providers: [MoveService, GameService]
})

export class GameComponent implements OnInit {
  constructor(
    private moveService: MoveService,
    private gameService: GameService,
    private route: ActivatedRoute) {
      this.move = new Move();
      this.player = new Player();
      this.round = new Round();

    }

  round: Round;
  player: Player;
  moves: Move[];
  move: Move;

  ngOnInit() {
    this.moveService.getMoves()
    .then((moves: Move[]) => {
      this.moves = moves;
    })
    .catch(error => console.log(error));

    const gameID = this.route.snapshot.params['id'];

    if (gameID != null) {
      this.gameService.getGame(gameID)
      .then((game: Game) => {
        console.log('Game found!');
        console.log(game);
      })
      .catch(error => console.log(error));
    }


    // if (game === 'new') {
    //   this.round = new Round(1);
    //   const idPlayer1 = this.route.snapshot.queryParams['player1'];
    //   this.playerService.getPlayer(idPlayer1)
    //   .then((player: Player) => {
    //     this.player = player;
    //   })
    //   .catch(error => console.log(error));
    // } else {
    //   console.log('Game isn\'t new');
    // }

  }

  onSubmit(form: NgForm) {
    console.log(this.move);
  }
}
