import React from 'react';

class OrderViev extends React.Component {
    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <button className="btn btn-danger" onClick={() => this.props.removeFromOrder(this.props.book.name)}>Remove</button>
                <hr/>
            </div>
        )
    }
}
export default OrderViev;