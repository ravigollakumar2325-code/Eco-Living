import { blogs } from '../Data/data';
 
const Blog = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Environmental Blog</h2>
      <div className="row g-4">
        {blogs.map(blog => (
          <div className="col-md-6" key={blog.id}>
            <div className="card h-100">
              <img src={blog.image} className="card-img-top" alt={blog.title} style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <small className="text-muted">{blog.date}</small>
                <h4 className="card-title fw-bold mt-2">{blog.title}</h4>
                <p className="card-text">{blog.excerpt}</p>
                <button className="btn btn-outline-success mt-2">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Blog;