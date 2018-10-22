export class Player {
  constructor(
    public _id?: number,
    public name?: string,
    public rank?: number
  ) {
    _id ? this._id = _id : this._id = 0;
    name ? this.name = name : this.name = '';
    rank ? this.rank = rank : this.rank = 0;
  }
}
