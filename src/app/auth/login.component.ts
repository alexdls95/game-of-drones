import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from './player.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class PlayerComponent {
  onSubmit(form: NgForm) {
    const player1 = new Player(form.value.player1);
    const player2 = new Player(form.value.player2);
  }
}
