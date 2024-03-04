import './App.css';
import Header from './componets/header-footer/header';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';  
import Footer from './componets/header-footer/footer';
import Category from './pages/category';
import YourCart from './componets/cart_section/cart_section';

function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product-detail/:id' element ={<Products/>}/>
      <Route path='/cart_section' element={<YourCart/>}/>
    </Routes>
    
    <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
