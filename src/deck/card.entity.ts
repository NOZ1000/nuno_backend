import { CardColor } from "src/shared/enums/card-color.enum";
import { CardType } from "src/shared/enums/card-type.enum";
import { CardValue } from "src/shared/enums/card-value.enum";

export class Card {
  color: CardColor;
  value: CardValue;
  type: CardType;

  constructor(color: CardColor, value: CardValue, type: CardType) {
    this.color = color;
    this.value = value;
    this.type = type;
  }
}
