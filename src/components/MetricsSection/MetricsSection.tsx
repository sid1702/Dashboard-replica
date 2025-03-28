import './MetricsSection.css';

const metrics = [
  {
    title: 'Sales',
    value: '$230,220',
    change: '+55%',
    period: '6 May - 7 May'
  },
  {
    title: 'Customers',
    value: '3,200',
    change: '+12%',
    period: '6 May - 7 May'
  },
  {
    title: 'Avg. Revenue',
    value: '$1,200',
    change: '+$213',
    period: '6 May - 7 May'
  }
];

const MetricsSection = () => {
  return (
    <div className="metrics-section">
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card">
          <div className="metric-header">
            <span className="metric-title">{metric.title}</span>
            <span className="metric-period">{metric.period}</span>
          </div>
          <div className="metric-value">{metric.value}</div>
          <div className="metric-footer">
            <span className="metric-change">{metric.change}</span>since last month
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsSection; 