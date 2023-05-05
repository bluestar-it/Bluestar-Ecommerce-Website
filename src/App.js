import Homepage from './Pages/Home/Homepage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layouts/Layouts';
import GlobalStyle from './Components/GlobalStyle/GlobalStyle';
import Product from './Pages/Product/Product';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/Product/ProductDetail';
import Register from './Pages/Register/Register';

function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Homepage />}></Route>
            <Route path="/product" element={<Product />} ></Route>
            <Route path="/products/:id" element={<ProductDetail />} ></Route>
            <Route path="/cart" element={<Cart/>} ></Route> 
            <Route path="/about" element={<About />} ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
