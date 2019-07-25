export interface IStore {
  setValue(value: string): void;
  setValidSymbols(value: string): void;
  validSymbols: string;
}
