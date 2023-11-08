import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    ScriptableContext,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import moment from "moment";
import {IAreaChartProps} from "../../../common/types/assets";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export function AreaChart(props: IAreaChartProps) {
    const {data} = props

    const options = {
        responsive: true,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
        },
    };

    const values = {
        labels: data.map((item: number[]): string => moment(item[0]).format('DD.MM.YY')),
        datasets: [
            {
                fill: true,
                label: 'Цена',
                data: data.map((item: number[]): number => item[1]),
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    const ctx = context.chart.ctx
                    const gradient = ctx.createLinearGradient(0, 0, 0, 180)
                    gradient.addColorStop(0, '#c1ef00')
                    gradient.addColorStop(1, '#232323')
                    return gradient
                },
            },
        ],
    };
    
    console.log(props.data)
    return <Line options={options} data={values} width={300} height={120}/>;
}
