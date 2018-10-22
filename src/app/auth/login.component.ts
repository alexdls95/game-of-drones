import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from './player.model';
import { PlayerService } from './player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PlayerService]
})

export class LoginComponent {
  constructor(
    private playerservice: PlayerService,
    private router: Router) {}

    player1 = new Player();
    player2 = new Player();

  onSubmit(form: NgForm) {
    this.player1.name = form.value.player1;
    this.player2.name = form.value.player2;

    this.playerservice.addPlayer(this.player1)
    .subscribe(
      (p) => {
        this.player1._id = p._id;
        console.log('Player1 added!');
        this.playerservice.addPlayer(this.player2)
        .subscribe(
          (p2) => {
            this.player2._id = p2._id;
            console.log('Player2 added!');
            this.router.navigate(['/game'], { queryParams: { game: 'new', player1: this.player1._id, player2: this.player2._id } });
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }
}
