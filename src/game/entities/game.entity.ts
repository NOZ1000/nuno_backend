import { Card } from "src/deck/card.entity";
import { Player } from "./player.entity";

export class Game {
  id: string;
  players: Player[];
  deck: Card[];
  discardPile: Card[];
  currentTurn: string;
  status: 'waiting' | 'active' | 'finished';
}
