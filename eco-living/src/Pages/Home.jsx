import { products } from '../Data/data';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router-dom';
 
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid py-5 text-center" style={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}>
        <div className="container py-5">
          <h1 className="display-4 fw-bold mb-4">Live Sustainably, Breathe Easier</h1>
          <p className="lead mb-5">Discover eco-friendly products and green living solutions for a better tomorrow.</p>
          <Link to="/products" className="btn btn-light btn-lg px-4 fw-bold text-success">Shop Eco-Friendly</Link>
        </div>
      </div>
 
      {/* Featured Products */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Featured Products</h2>
        <div className="row g-4">
          {products.slice(0, 3).map(product => (
            <div className="col-md-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default Home;