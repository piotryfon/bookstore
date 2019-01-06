import React, { Component } from 'react';
import '../index.css';
import Order from './Order';
import Inventory from './Inventory';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //books: [],
      order: []
    }
  }

  addToOrder = (book) => {
    this.setState({order: [...this.state.order, book]})
  }
  removeFromOrder = (title) => {
    this.setState({order: this.state.order.filter(book => title !== book.name)})
  }
  render() {
    return (
      <div className="app container">
       <div className="row">
        <Header />
       </div>
        <div className="row">
          <Order order={this.state.order} removeFromOrder={this.removeFromOrder}/>
          <Inventory books={this.state.books} addToOrder={this.addToOrder}/>
        </div>
      </div>
    );
  }
}

export default App;
