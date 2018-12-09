import React from 'react';

class BookViev extends React.Component {
    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <i>{this.props.book.author}</i><br/>
                <p>{this.props.book.description}</p>
                <img src={this.props.book.image} width="100" height="75" alt={this.props.book.name}/>
                <hr/>
            </div>
        )
    }
}
export default BookViev;