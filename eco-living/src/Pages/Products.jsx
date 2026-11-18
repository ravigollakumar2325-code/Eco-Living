import { products } from '../Data/data';
import ProductCard from '../Components/ProductCard';
 
const Products = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">All Eco-Friendly Products</h2>
      <div className="row g-4">
        {products.map(product => (
          <div className="col-md-3 col-sm-6" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Products;