import { Player } from '../auth/player.model';
import { Move } from './move.model';

export class Round {
  constructor(
    public movePlayer1?: Move,
    public movePlayer2?: Move,
    public winner?: Player
  ) { }
}
