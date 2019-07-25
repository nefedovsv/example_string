import { Store } from './Store'
import { IStore } from './IStore'
export function createStore(validSymbols: string): IStore {
  const store: Store = new Store()
  store.setValidSymbols(validSymbols)
  return store
}
