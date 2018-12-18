import React from 'react';

class BookViev extends React.Component {
    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <i>{this.props.book.author}</i><br/>
                <p>{this.props.book.description}</p>
                <img src={this.props.book.image} width="100" height="75" alt={this.props.book.name}/>
                <br/>
                <button className="btn btn-primary" onClick={() => this.props.addToOrder(this.props.book)}>Add to order</button>
                <hr/>
            </div>
        )
    }
}
export default BookViev;