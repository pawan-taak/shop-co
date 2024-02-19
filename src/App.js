import logo from './logo.svg';
import './App.css';
import Header from './componets/header-footer/header';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Footer from './componets/header-footer/footer';

function App() {
  return (
  <>
  <BrowserRouter>
      <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
