export interface IStore {
  setValue(value: string): void;
  setValidSymbols(value: string): void;
  validSymbols: string;
  symbols: symbolsData[];
}
export type symbolsData = { symbol: string, count: number }
