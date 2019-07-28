import React, { Component } from "react";
import { observer } from "mobx-react";
import { IStore } from "../../store/IStore";
import { Table } from "antd";

export interface SymbolTableProps {
    store: IStore;
}

@observer
export class SymbolTable extends Component<SymbolTableProps> {
    public render(): React.ReactNode {
        const store = this.props.store;
        const data = store.symbols;
        return data.length ? (
            <Table 
                dataSource={store.symbols}
                columns={columns}
                pagination={false}
            />
        ) : null;
    }
}
const columns = [
    {
        title: "Symbol",
        dataIndex: "symbol",
        key: "symbol"
    },
    {
        title: "Count",
        dataIndex: "count",
        key: "count"
    }
];
