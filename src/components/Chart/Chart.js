import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

  const chartValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...chartValues);

  return (
    <div className="chart">
      {
        props.dataPoints.map(dataPoint => {
          return <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
          />
        })
      }
    </div>
  )
}

export default Chart;