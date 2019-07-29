import React, { Component } from 'react'
import { inject, Observer } from "mobx-react";
import { SymbolInput } from '../SymbolInput/SymbolInput'
import { SymbolTable } from '../SymbolTable/SymbolTable'
import { PieChart } from '../PieChart/PieChart'
import { IStore } from '../../store/IStore'
import styles from './App.module.css'
interface AppProps {
  store?: IStore;
}
@inject("store")
export class App extends Component<AppProps> {
  render(): React.ReactNode {
    const store: IStore = this.props.store!;
    return (
      <div className={styles.box} >
        <div>
          <SymbolInput  placeholder={'Введите искомые символы! (пример: a,b,c)'} onChange={this.onValidSymbol}/>
        </div>
        <Observer>{() => <div><SymbolInput placeholder={`Допустимые для ввода символы: ${store.validSymbols}`} onChange={this.onChangeSymbol} /></div>}</Observer>
        <div>
          <SymbolTable store={store} />
        </div>
        <div>
          <PieChart store={store} />
        </div>
      </div>
    )
  }
  onChangeSymbol = (value: string) => {
    const store: IStore = this.props.store!;
    store.setValue(value);
  };
  onValidSymbol = (value: string) => {
    const store: IStore = this.props.store!;
    store.setValidSymbols(value)
  };
}