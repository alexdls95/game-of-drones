import { Player } from '../auth/player.model';
import { Move } from './move.model';

export class Round {
  constructor(
    public move_player1?: Move,
    public move_player2?: Move,
    public winner?: Player
  ) { }
}
