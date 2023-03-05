import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Header from './components/common/Header'
import Footer from './components/common/Footer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
        
      
        
        <p>Hello World</p>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={ <Cart /> } />
     
          {/* <ExclusiveForm />           */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
