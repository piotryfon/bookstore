import React from 'react';
import OrderView from './OrderView';
class Order extends React.Component {
    
    render() {
        const orderedBooks = this.props.order.map(order => <OrderView book={order} removeFromOrder={this.props.removeFromOrder}/>)
        return (
            <div className="order col-md-4">
            <h2>Orders:</h2>
               {orderedBooks}
            </div>
        )
    }
}
export default Order;