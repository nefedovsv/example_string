import React, { Component } from "react";
import { observer } from "mobx-react";
import { IStore } from "../../store/IStore";
import ReactMinimalPieChart from "react-minimal-pie-chart";
export interface PieChartProps {
    store: IStore;
}

@observer
export class PieChart extends Component<PieChartProps> {
    public render(): React.ReactNode {
        const store = this.props.store;

        const data: {
            title: string;
            value: number;
            color: string;
            key: string;
        }[] = store.symbols.map(item => ({
            title: item.symbol,
            value: item.count,
            key: item.symbol,
            color: getColorByChar(item.symbol)
        }));
        return (
            <ReactMinimalPieChart
                data={data}
                label={({ data, dataIndex }) =>
                    Math.round(data[dataIndex].percentage) + "%" 
                }
                lineWidth={20}
                rounded
                style={{ height: '500px' }}
                labelPosition={60}
                labelStyle={{
                    fontSize: "5px",
                    fontFamily: "sans-serif",
                    fill: "#000000"
                }}
            />
        );
    }
}

const colors: { [field: string]: string } = {};

function getColorByChar(char: string): string {
    if (!colors[char]) {
        const color: string = `#${Math.round(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, "0")}`;

        colors[char] = color;
    }

    return colors[char];
}