import React from 'react'
import {GlobalStyle} from './styledComponents/GlobalStyle'
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Product from './components/Products/Products'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Cart from './components/Cart/Cart'
import ErrorPage from './components/Error/Error'
import { ThemeProvider } from 'styled-components' 
import ThemeLight from './styledComponents/ThemeLight'
import Nav from './components/Header/Nav'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <ThemeProvider theme={ThemeLight}>
      <BrowserRouter>
        <GlobalStyle/>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/products" element={<Product/>} />
            <Route path="/singleproduct/:id" element={<SingleProduct/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
