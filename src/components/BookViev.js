import React from 'react';

class BookViev extends React.Component {
    render() {
        return (
            <div className="book-view row">
                <div className="col-sm-4">
                    <img src={this.props.book.image} width="100" height="75" alt={this.props.book.name}/>
                </div>
                <div className="col-sm-4">
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/>
                    <p>{this.props.book.description}</p>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-primary" onClick={() => this.props.addToOrder(this.props.book)}>Add to order</button>
                </div>
            </div>
        )
    }
}
export default BookViev;