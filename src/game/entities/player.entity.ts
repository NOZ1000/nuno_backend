import { Card } from "src/deck/card.entity";

export class Player {
  id: string;
  username: string;
  hand: Card[]; 
  score: number;
  isTurn: boolean;
  status: 'active' | 'disconnected';

  constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
    this.hand = [];
    this.score = 0;
    this.isTurn = false;
    this.status = 'active';
  }
}
