import { Component } from '@angular/core';
import { Round } from '../game/round.model';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent {
    rounds: Round[] = [
      {
        number: 1,
        winner: {name: 'Alex'}
      },
      {
        number: 2,
        winner: {name: 'Aldana'}
      }
    ];
}
