import { Player } from '../player/player.model';
import { Move } from './move.model';

export class Round {
  constructor(
    public number: number,
    public move_player1?: Move,
    public move_player2?: Move,
    public winner?: Player
  ) { }
}