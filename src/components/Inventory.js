import React from 'react';
import BookViev from './BookViev';

class Inventory extends React.Component {

    render() {
        const bookListing =  this.props.books.map(book => <BookViev book={book}/>)
        return (
            <div className="inventory col-md-4">
               {bookListing}
            </div>
        )
    }
}
export default Inventory;