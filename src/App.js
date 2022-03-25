import './App.css';
import React,{ Component } from 'react';
import Header from './layout/header';
import { Route, Routes } from "react-router-dom"
import Footer from './layout/footer';
import Home from './views/home';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
