import React, { Component } from 'react';
import './index.css';
import AdminPanel from './components/AdminPanel';
import Order from './components/Order';
import Inventory from './components/Inventory';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="app container">
       <div className="row">
        <Header />
       </div>
        <div className="row">
          <Order />
          <Inventory />
          <AdminPanel />
        </div>
      </div>
    );
  }
}

export default App;
