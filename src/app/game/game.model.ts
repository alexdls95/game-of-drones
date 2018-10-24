import { Player } from '../auth/player.model';
import { Round } from './round.model';

export class Game {
    constructor(
        public _id: number,
        public player1: Player,
        public player2: Player,
        public rounds: Round[],
        public winner?: Player
    ) {}
}
