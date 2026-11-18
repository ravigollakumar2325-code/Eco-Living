const ProductCard = ({ product }) => {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '250px', objectFit: 'cover' }} />
      <div className="card-body">
        <span className="badge mb-2" style={{ backgroundColor: 'var(--primary-color)' }}>{product.category}</span>
        <h5 className="card-title fw-bold">{product.name}</h5>
        <p className="card-text fw-bold" style={{ color: 'var(--primary-color)' }}>{product.price}</p>
        <button className="btn btn-outline-success w-100">View Details</button>
      </div>
    </div>
  );
};
 
export default ProductCard;