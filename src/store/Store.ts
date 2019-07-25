import { action } from "mobx";
import { IStore } from "./IStore";

export class Store implements IStore {
    validSymbols:string =''
    @action
    setValue(value: string): void {
        //const map: Map<string, number> = this.getCharStatMapper(value);
       // this.updateMap(map);
    }
    @action
    setValidSymbols(value: string): void {
        this.validSymbols = value
        console.log(value)
    }
}