import { Injectable } from '@nestjs/common';
import { Card } from './card.entity';
import { CardColor } from 'src/shared/enums/card-color.enum';
import { CardValue } from 'src/shared/enums/card-value.enum';
import { CardType } from 'src/shared/enums/card-type.enum';

@Injectable()
export class Deck {
  private cards: Card[] = [];

  constructor() {
    this.generateDeck();
  }

  private generateDeck(): void {
    const colors = [CardColor.RED, CardColor.GREEN, CardColor.BLUE, CardColor.YELLOW];
    const values = [
      CardValue.ZERO, CardValue.ONE, CardValue.TWO, CardValue.THREE, CardValue.FOUR,
      CardValue.FIVE, CardValue.SIX, CardValue.SEVEN, CardValue.EIGHT, CardValue.NINE,
      CardValue.SKIP, CardValue.REVERSE, CardValue.DRAW_TWO,
    ];

    // Create number and action cards for each color
    for (const color of colors) {
      for (const value of values) {
        const type = this.determineCardType(value);
        this.cards.push(new Card(color, value, type));

        // For numbers 1-9 and action cards, add duplicates
        if (value !== CardValue.ZERO) {
          this.cards.push(new Card(color, value, type));
        }
      }
    }

    // Add wild cards
    for (let i = 0; i < 4; i++) {
      this.cards.push(new Card(CardColor.WILD, CardValue.WILD, CardType.WILD));
      this.cards.push(new Card(CardColor.WILD, CardValue.WILD_DRAW_FOUR, CardType.WILD));
    }
  }

  private determineCardType(value: CardValue): CardType {
    if (Object.values(CardValue).slice(0, 10).includes(value)) {
      return CardType.NUMBER;
    }
    if ([CardValue.SKIP, CardValue.REVERSE, CardValue.DRAW_TWO].includes(value)) {
      return CardType.ACTION;
    }
    return CardType.WILD;
  }

  // Additional methods like shuffle, drawCard, etc.
}

