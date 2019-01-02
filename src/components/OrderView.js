import React from 'react';

class OrderView extends React.Component {
    render() {
        return (
            <div className="orderView">
                <b>{this.props.book.name}</b><br/>
                <button className="btn btn-danger" onClick={() => this.props.removeFromOrder(this.props.book.name)}>Remove</button>
                <hr/>
            </div>
        )
    }
}
export default OrderView;