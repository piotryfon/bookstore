import React, { Component } from 'react';
import './index.css';
import AdminPanel from './components/AdminPanel';
import Order from './components/Order';
import Inventory from './components/Inventory';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      order: []
    }
  }
  addNewBook = (book) => {
    let newBooks = [ ...this.state.books ];
    newBooks.push(book);
    this.setState({
      books: newBooks
    })
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
          <AdminPanel books={this.state.books} addBook={this.addNewBook}/>
        </div>
      </div>
    );
  }
}

export default App;
