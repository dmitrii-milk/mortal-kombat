export default class CharacterDB {
    constructor() {
        this._localhost =  'http://localhost:3000/characters'
    }
  async  getCharacter(req) {
        const res = await fetch(req);
        return await res.json();
    }
}