/** A card received from rws-tarot_card_api */
export interface RwsTarotCard {
  name_short: string;
  name: string;
  value: string;
  value_int: number;
  type: "major" | "minor";
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

export interface Card extends Partial<RwsTarotCard> {
  /** @example "What tools will you need to accomplish this goal?" */
  position: string;
  isFaceUp?: boolean;
  /** Unique index of card/position, used for performing actions */
  i?: number;
}

/** A tarot spread. */
export interface Spread {
  /** @example "Next Steps in Life" */
  title: string;
  cards: Card[];
}
