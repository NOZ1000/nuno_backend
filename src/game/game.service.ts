import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { Player } from './entities/player.entity';
import { InjectRedis } from '@nestjs-modules/ioredis';

@Injectable()
export class GameService {
  constructor(
    @InjectRedis() private readonly redisClient: Redis
  ) { }

  async createPlayer(player: Player): Promise<void> {
    const playerKey = `player:${player.id}`;
    await this.redisClient.set(playerKey, JSON.stringify(player));
  }

  async getPlayer(playerId: string): Promise<Player | null> {
    const playerData = await this.redisClient.get(`player:${playerId}`);

    if (playerData) {
      return JSON.parse(playerData) as Player;
    }

    return null;
  }
}
