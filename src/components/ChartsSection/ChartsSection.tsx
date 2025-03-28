import ReactECharts from 'echarts-for-react';
import './ChartsSection.css';

const ChartsSection = () => {
  const channelsOptions = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: '10%',
      top: 'center',
      icon: "circle"
    },
    series: [
      {
        name: 'Channels',
        type: 'pie',
        radius: '75%',
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { 
            value: 13, 
            name: 'Facebook',
            itemStyle: { color: '#1873e6' }
          },
          { 
            value: 18, 
            name: 'Direct',
            itemStyle: { color: '#d81860' }
          },
          { 
            value: 9,
            name: 'Referral',
            itemStyle: { color: '#161817' }
          },
          { 
            value: 55, 
            name: 'Organic',
            itemStyle: { color: '#4a5362' }
          },
        ]
      }
    ]
  };

  const revenueOptions = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Facebook Ads', 'Google Ads'],
      top: '0%',
      left: '0%',
      icon: 'circle',
      itemWidth: 8,
      textStyle: {
        color: '#7e8299'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisLine: {
        lineStyle: {
          color: '#e4e6ef'
        }
      },
      axisLabel: {
        color: '#7e8299'
      }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 700,
      interval: 100,
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
    series: [
      {
        name: 'Facebook Ads',
        type: 'line',
        smooth: true,
        data: [50, 100, 150, 200, 300, 350, 400, 500, 700],
        symbol: 'circle',
        itemStyle: {
          color: '#3699ff'
        },
        lineStyle: {
          width: 3
        },
        symbolSize: 8
      },
      {
        name: 'Google Ads',
        type: 'line',
        smooth: true,
        data: [20, 50, 80, 100, 150, 180, 220, 250, 300],
        symbol: 'circle',
        itemStyle: {
          color: '#181c32'
        },
        lineStyle: {
          width: 3
        },
        symbolSize: 8
      }
    ]
  };

  return (
    <>
      <div className="chart-card">
        <div className="chart-header">
          <h3 className="chart-title">Channels</h3>
          <span className="info-icon">ⓘ</span>
        </div>
        <ReactECharts 
          option={channelsOptions}
          style={{ height: '300px' }}
        />
        <div className="chart-description">
          <p>More than <span className="highlight">1,200,000</span> sales are made using referral marketing and <span className="highlight">700,000</span> are from social media</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
      
      <div className="chart-card">
        <div className="chart-header">
          <h3 className="chart-title">Revenue</h3>
          <span className="info-icon">ⓘ</span>
        </div>
        <ReactECharts 
          option={revenueOptions}
          style={{ height: '300px' }}
        />
      </div>
    </>
  );
};

export default ChartsSection; 