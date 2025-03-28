import ReactECharts from 'echarts-for-react';
import './SalesInsights.css';

const ageGroups = [
  { age: '42+', sales: 15 },
  { age: '36-42', sales: 20 },
  { age: '31-36', sales: 60 },
  { age: '26-30', sales: 12 },
  { age: '21-25', sales: 20 },
  { age: '16-20', sales: 15 },
];

const countries = [
  { name: 'USA', flag: 'us', sales: '1,200', bounceRate: '40.5%' },
  { name: 'Germany', flag: 'de', sales: '380', bounceRate: '25.1%' },
  { name: 'UK', flag: 'gb', sales: '850', bounceRate: '35.4%' },
  { name: 'Brazil', flag: 'br', sales: '650', bounceRate: '30.2%' },
  { name: 'Australia', flag: 'au', sales: '450', bounceRate: '27.8%' },
];

const SalesInsights = () => {
  const ageChartOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      max: 60,
      axisLine: {
        lineStyle: {
          color: '#e4e6ef'
        }
      },
      axisLabel: {
        color: '#7e8299'
      },
      splitLine: {
        lineStyle: {
          color: '#e4e6ef',
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'category',
      data: ageGroups.map(group => group.age),
      axisLine: {
        lineStyle: {
          color: '#e4e6ef'
        }
      },
      axisLabel: {
        color: '#7e8299'
      }
    },
    series: [
      {
        type: 'bar',
        data: ageGroups.map(group => group.sales),
        itemStyle: {
          color: '#344765'
        },
        barWidth: '40%',
        label: false
      }
    ]
  };

  return (
    <>
      <div className="sales-by-age">
        <h3 className="insights-title">Sales by age</h3>
        <ReactECharts 
          option={ageChartOptions}
          style={{ height: '300px' }}
        />
      </div>
      
      <div className="sales-by-country">
        <h3 className="insights-title">Sales by country</h3>
        <table className="country-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Sales</th>
              <th>Bounce</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.name}>
                <td>
                  <img 
                    src={`https://flagcdn.com/24x18/${country.flag}.png`}
                    alt={`${country.name} flag`}
                    className="country-flag"
                  />
                  <span className="country-name">{country.name}</span>
                </td>
                <td>{country.sales}</td>
                <td>{country.bounceRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SalesInsights; 