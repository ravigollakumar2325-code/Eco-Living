import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Components/Appcontext';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
 
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer /> 
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
 
export default App;