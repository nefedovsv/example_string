export interface IStore {
  setValue(value: string): void;
  setValidSymbols(value: string): void;
  validSymbols: string | null;
  symbols: symbolsData[];
}
export type symbolsData = { symbol: string, count: number }
