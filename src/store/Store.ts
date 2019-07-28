import { action, computed, observable } from "mobx";
import { IStore, symbolsData } from "./IStore";
export class Store implements IStore {
    validSymbols: string = ''
    @observable symbolsMap = new Map<string, number>()

    @action
    setValue(value: string) {
        const symboMapper: Map<string, number> = this.getSymbolMapper(value);
        this.symbolsMap = symboMapper
        console.log(symboMapper)
    }
    @action
    setValidSymbols(value: string): void {
        this.validSymbols = value
    }
    @computed get symbols(): symbolsData[] {
        const symbols: symbolsData[] = [...this.symbolsMap.entries()].map(([key, value]) => ({
            symbol: key,
            count: value
        }));
        return symbols;
    }
    getSymbolMapper(value: string) {
        const mapper: Map<string, number> = new Map<string, number>();
        const getMap = (allowString: string): string[] => allowString.split(',')
         // eslint-disable-next-line 
        getMap(this.validSymbols).map((symbol: string) => {
            let reg = new RegExp(symbol, 'g');
            let arrSymbols = value.match(reg);
            if (arrSymbols) {
                mapper.set(arrSymbols[0], arrSymbols.length);
            }
        });
        return mapper
    }
} 