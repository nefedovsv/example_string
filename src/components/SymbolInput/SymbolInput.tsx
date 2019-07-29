import React, { Component, ChangeEvent } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Input, Icon } from "antd";
import { IStore } from "../../store/IStore";
interface SymbolInputProps {
  store: IStore;
}
@observer
export class SymbolInput extends Component<SymbolInputProps> {
  @observable
  value: string = "";
  render(): React.ReactNode {
    const { store } = this.props;
    return (
      <Input
        value={this.value}
        onChange={this.onChange}
        placeholder={`Допустимые для ввода буквы: ${store.validSymbols}`}
        prefix={<Icon type="message" style={{ color: "rgba(0,0,0,.25)" }} />}
        allowClear
      />
    );
  }
  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.value = e.currentTarget.value;
    const store: IStore = this.props.store!;
    store.setValue(this.value);
  };
}
