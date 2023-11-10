import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import moment from "moment";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function LineChart(props: any) {

    const {data} = props
    console.log(data)

    const options = {
        responsive: true,
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                }
            },
            y: {
                display: true,
                grid: {
                    color: '#3C3C3C',
                    display: true
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
        },
    };

    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const value = {
        labels: data[0].price_chart_data.map((item: any) =>
            moment(item[0]).format("HH.mm")
        ),
        datasets: [
            {
                label: 'Цена $',
                data: data[0].price_chart_data.map((item: any) => item[1]),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


    return (
        <>
            <div style={{display: "flex", alignItems: "center", marginBottom: 20,}}>
                <h1 style={{textTransform: "capitalize", marginRight: 20}}>{data[0].name}</h1>
                <div style={{width: 15, height: 15, borderRadius: "50%", backgroundColor: 'rgb(255, 99, 132)'}}></div>
            </div>
            <Line style={{maxWidth: '100%', maxHeight: 600}} options={options} data={value}/>
        </>
    );
}



























