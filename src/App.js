import './App.css';
import React,{ Component } from 'react';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Footer from './layout/footer';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
