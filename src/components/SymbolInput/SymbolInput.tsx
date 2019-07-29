import React, { Component, ChangeEvent } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Input, Icon } from "antd";
import { IStore } from "../../store/IStore";
interface SymbolInputProps {
  onChange: (value: string) => void;
  placeholder:string;
  store?: IStore;
}
@observer
export class SymbolInput extends Component<SymbolInputProps> {
  @observable
  value: string = "";
  render(): React.ReactNode {
    return (
      <Input
        value={this.value}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        prefix={<Icon type="message" style={{ color: "rgba(0,0,0,.25)" }} />}
        allowClear
      />
    );
  }
  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.saveValue(e.target.value);
    this.notify();
  };
  saveValue(value: string): void {
    this.value = value;
  }
  notify(): void {
    const { onChange } = this.props;
    onChange(this.value);
  }
}
