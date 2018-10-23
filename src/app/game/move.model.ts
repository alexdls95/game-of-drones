export class Move {
  constructor(
    public _id?: number,
    public move?: string,
    public kills?: string
  ) {
    _id ? this._id = _id : this._id = 0;
    move ? this.move = move : this.move = '';
    kills ? this.kills = kills : this.kills = '';
  }
}
