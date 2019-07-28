import React, { Component } from 'react'
import { inject } from "mobx-react";
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
          <SymbolInput store={store} />
        </div>
        <div>
          <SymbolTable store={store} />
        </div>
        <div>
          <PieChart store={store} />
        </div>
      </div>
    )
  }
}
