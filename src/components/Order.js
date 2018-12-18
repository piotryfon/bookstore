import React from 'react';
import OrderViev from './OrderViev';
class Order extends React.Component {
    
    render() {
        const orderedBooks = this.props.order.map(order => <OrderViev book={order} removeFromOrder={this.props.removeFromOrder}/>)
        return (
            <div className="order col-md-4">
            <h2>Orders:</h2>
               {orderedBooks}
            </div>
        )
    }
}
export default Order;