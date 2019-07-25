import React, { Component } from 'react'
import { inject } from "mobx-react";
import { SymbolInput } from '../SymbolInput/SymbolInput'
import { IStore } from '../../store/IStore'
import styles from './App.module.css'

interface AppProps {
  store?: IStore;
}
@inject("store")
export class App extends Component<AppProps> {

  render(): React.ReactNode {
    const store: IStore = this.props.store!;
    return (<div className={styles.box}><SymbolInput store={store} /></div>)
  }
}
