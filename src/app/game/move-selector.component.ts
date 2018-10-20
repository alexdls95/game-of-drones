import { Component } from '@angular/core';
import { Round } from './round.model';
import { Player } from '../auth/player.model';
import { Move } from './move.model';

@Component({
  selector: 'app-move-selector',
  templateUrl: './move-selector.component.html',
  styleUrls: ['./move-selector.component.css', '../app.component.css']
})

export class MoveSelectorComponent {
  move: Move = {value: 0, name: '', kills: ''};
  round = new Round(1);
  player = new Player('Alex');
  moves: Move[] = [
    {value: 1, name: 'Paper', kills: 'Rock'},
    {value: 2, name: 'Rock', kills: 'Scissors'},
    {value: 3, name: 'Scissors', kills: 'Paper'}
  ];
}
