export class Player {
  id: string;
  username: string;
  hand: string[]; 
  score: number;

  constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
    this.hand = [];
    this.score = 0;
  }
}
