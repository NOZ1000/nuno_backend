import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [RedisModule],
  providers: [GameService],
  controllers: [GameController]
})
export class GameModule {}
