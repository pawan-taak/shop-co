import './App.css';
import Header from './componets/header-footer/header';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';  
import Footer from './componets/header-footer/footer';
import Category from './pages/category';
import ProductDetails from './componets/product-detail/product-detail';


function App() {
  return (
  <>
  <BrowserRouter >
      <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/category' element={<Category/>}/>
  </Routes>
  <Footer/>
  <ProductDetails />
  </BrowserRouter>
  </>
  );
}

export default App;
