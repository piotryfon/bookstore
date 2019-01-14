import React from 'react';

class OrderView extends React.Component {
    render() {
        return (
            <div className="orderView row">
                <div className="col-sm-8">
                    <b>{this.props.book.name}</b>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-danger" onClick={() => this.props.removeFromOrder(this.props.book.name)}>Remove</button>
                </div>
            </div>
        )
    }
}
export default OrderView;