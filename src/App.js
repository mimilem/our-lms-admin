import './App.css';
import React,{ Component } from 'react';
import Header from './layout/header';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
      </div>
    );
  }
}

export default App;
