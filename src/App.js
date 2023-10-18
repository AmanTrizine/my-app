import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Aman from './Aman';
import Products from './FetechProducts';
class App extends Component {
  render() {
    return (
  
       <Router>
        <Routes>
          <Route path='*'  element={<Aman/>} />
          <Route path='/p'  element={<Products/>} />
        </Routes>
       </Router>

     
    );
  }
}

export default App;
