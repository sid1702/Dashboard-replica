import MetricsSection from '../../components/MetricsSection/MetricsSection';
import ChartsSection from '../../components/ChartsSection/ChartsSection';
import SalesInsights from '../../components/SalesInsights/SalesInsights';
import ProductsTable from '../../components/ProductsTable/ProductsTable';
import './Sales.css';

const Sales = () => {
  return (
    <div className="sales-page">
      <div className="content-wrapper">
        <MetricsSection />
        <ChartsSection />
        <SalesInsights />
        <ProductsTable />
      </div>
    </div>
  );
};

export default Sales; 