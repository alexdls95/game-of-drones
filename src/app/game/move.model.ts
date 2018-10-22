export class Move {
  _id: number;
  move: string;
  kills: string;
  constructor(
    _id?: number,
    move?: string,
    kills?: string
  ) {
    _id ? this._id = _id : this._id = 0;
    move ? this.move = move : this.move = '';
    kills ? this.kills = kills : this.kills = '';
  }
}
