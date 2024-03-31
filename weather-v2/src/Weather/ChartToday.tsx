import { FC } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
import { todayTemp } from './weathercont';

defaults.maintainAspectRatio = false
defaults.responsive = true
defaults.plugins.title.display = true
defaults.plugins.title.align = "start"
defaults.plugins.title.color = "white"
defaults.plugins.legend.title.color = "white"
defaults.color = "white"

const ChartToday: FC = () => {
    // console.log(todayTemp)
    return (
        <div className='chart-of-today'>
            <Line
                data={{
                    labels: todayTemp.map((data) => data.date),
                    datasets: [
                        {
                            label: "Max Temp.",
                            data: todayTemp.map((data) => data.max_temp),
                            borderColor: "#6D9DB5",
                            backgroundColor: "#6D9DB5"
                        },
                        {
                            label: "Min Temp.",
                            data: todayTemp.map((data) => data.min_temp),
                            borderColor: "#CDD8E8",
                            backgroundColor: "#CDD8E8"
                        }
                    ]
                }}
                options={{
                    elements: {
                        line: {
                            tension: 0.3,
                        }
                    },
                    plugins: {
                        title: {
                            font: {
                                size: 20,
                                weight: "normal"
                            },
                            text: "Hourlys"
                        }
                    }
                }}
            />
        </div>
    )
}

export default ChartToday