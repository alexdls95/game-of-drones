import { Component, OnInit } from '@angular/core';
import { Round } from './round.model';
import { Player } from '../auth/player.model';
import { Move } from './move.model';
import { MoveService } from './move.service';

@Component({
  selector: 'app-move-selector',
  templateUrl: './move-selector.component.html',
  styleUrls: ['./move-selector.component.css', '../app.component.css'],
  providers: [MoveService]
})

export class MoveSelectorComponent implements OnInit {
  constructor(private moveService: MoveService) {}

  round = new Round(1);
  player = new Player('Alex');
  moves: Move[];
  move = {_id: 0, move: '', kills: ''};
  loading = true;

  ngOnInit() {
    this.moveService.getMoves()
    .then((moves: Move[]) => {
      this.moves = moves;
    });
  }
}
