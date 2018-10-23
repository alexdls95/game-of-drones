import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameService } from '../game/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GameService]
})

export class LoginComponent {
  constructor(
    private gameService: GameService,
    private router: Router) {}

  onSubmit(form: NgForm) {
    const namePlayer1 = form.value.player1;
    const namePlayer2 = form.value.player2;

    this.gameService.newGame(namePlayer1, namePlayer2)
    .subscribe(
      ({ _id }) => {
        console.log('Game created!');
        this.router.navigate(['/game', _id]);
      },
      error => console.log(error)
    );
  }
}
