export class Lobby {
  id: string;
  players: string[];
  maxPlayers: number;
  status: 'waiting' | 'full' | 'closed';
}
