import React, {Component, ChangeEvent} from 'react'
import {  observer } from 'mobx-react'
import { observable } from "mobx";
import { Input, Icon} from 'antd'

//@inject('')  
@observer
   export class SymbolInput extends Component{
   @observable
      value: string = "";
        render(): React.ReactNode{
        return(    
            <Input
            value={this.value}
            onChange={this.onChange}
            placeholder="here is yours TODO"
            prefix={
                <Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            allowClear
          />
        )       
    }  
        onChange = (e: ChangeEvent<HTMLInputElement>) => {
            this.value = e.currentTarget.value;     
      };
}


