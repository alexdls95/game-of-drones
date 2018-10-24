import { Component, OnInit } from '@angular/core';
import { Round } from './round.model';
import { Player } from '../auth/player.model';
import { Move } from './move.model';
import { MoveService } from './move.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router) {
      this.move = new Move();
      this.player = new Player();
      this.round = new Round();

  }

  game: Game;
  round: Round;
  player: Player;
  moves: Move[];
  move: Move;

  ngOnInit() {
    this.getMoves();

    const gameID = this.route.snapshot.params['id'];
    if (gameID != null) {
      this.getGame(gameID);
    }
  }

  getMoves() {
    this.moveService.getMoves()
    .then((moves: Move[]) => {
      this.moves = moves;
    })
    .catch(error => console.log(error));
  }

  getGame(gameID: any) {
    this.gameService.getGame(gameID)
      .then((game: Game) => this.assignGame(game))
      .catch(error => console.log(error));
  }

  assignGame(game: Game) {
    this.game = game;
    if (game.winner != null) {
      console.log('There is a Winner!!!');
      this.router.navigate(['/game', this.game._id, 'winner'], { queryParams: { name: this.game.winner.name }});
    } else {
      this.round = this.game.rounds[this.game.rounds.length - 1];
      this.nextPlayerOrFinishRound();
    }
  }

  nextPlayerOrFinishRound() {
    if (this.round.movePlayer1 == null) {
      this.player = this.game.player1;
    } else if (this.round.movePlayer2 == null) {
      this.player = this.game.player2;
    } else {
      this.finishRound();
    }
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit');
    if (this.round.movePlayer1 == null) {
      console.log('this.round.movePlayer1 == null');
      this.round.movePlayer1 = this.move;
    } else if (this.round.movePlayer2 == null) {
      console.log('this.round.movePlayer2 == null');
      this.round.movePlayer2 = this.move;
    }
    this.move = {_id: 0};
    this.nextPlayerOrFinishRound();
  }

  finishRound() {
    console.log('Send round');
    console.log(this.game);

    this.gameService.finishRound(this.game._id, this.round)
    .subscribe(
      (game) => {
        console.log('Round sent!');
        this.assignGame(game);
      },
      error => console.log(error)
    );
  }
}
