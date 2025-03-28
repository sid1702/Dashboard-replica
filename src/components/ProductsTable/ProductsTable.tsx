import './ProductsTable.css';

const products = [
  {
    name: 'Nike v22 Running',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=nike-v22&size=40',
    value: '$500',
    adSpend: '$230',
    refunds: '190'
  },
  {
    name: 'Adidas Air Jordan',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=adidas-air&size=40',
    value: '$450',
    adSpend: '$180',
    refunds: '120'
  },
  {
    name: 'Puma Classic',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=puma-classic&size=40',
    value: '$350',
    adSpend: '$120',
    refunds: '85'
  },
  {
    name: 'Reebok Workout',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=reebok-workout&size=40',
    value: '$280',
    adSpend: '$100',
    refunds: '70'
  }
];

const ProductsTable = () => {
  return (
    <div className="products-table-container">
      <h3 className="products-title">Top Selling Products</h3>
      <table className="products-table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>VALUE</th>
            <th>ADS SPENT</th>
            <th>REFUNDS</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="product-cell">
                <img src={product.image} alt={product.name} className="product-image" />
                <span className="product-name">{product.name}</span>
              </td>
              <td>{product.value}</td>
              <td>{product.adSpend}</td>
              <td>
                {product.refunds}
                <span className="arrow-up">˄</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable; 