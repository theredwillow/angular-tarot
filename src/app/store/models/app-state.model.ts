import { Spread } from './spread.model';

export interface AppState {
  readonly step: number;
  readonly spread: Spread;
}
