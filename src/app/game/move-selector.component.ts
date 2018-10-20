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
  move: Move = {value: 0, name: '', killing_move_name: ''};
  round = new Round(1);
  player = new Player('Alex');
  moves: Move[] = [
    {value: 1, name: 'Paper', killing_move_name: 'Rock'},
    {value: 2, name: 'Rock', killing_move_name: 'Scissors'},
    {value: 3, name: 'Scissors', killing_move_name: 'Paper'}
  ];
}
