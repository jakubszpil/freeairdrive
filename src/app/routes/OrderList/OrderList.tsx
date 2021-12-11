import './OrderList.css';
import OrderListComponent from './OrderListComponent';

function OrderList() {
  return (
    <div className="orderlist d-flex flex-column align-items-center">
      <h2 className='orderlist-header'>Your orders</h2>
      <div className='d-flex justify-content-around w-75 mb-5'>
        <h4>Vehicle type</h4>
        <h4>Delivery time</h4>
        <h4>Delivered?</h4>
      </div>
      <OrderListComponent />
      <OrderListComponent />
      <OrderListComponent />
      <OrderListComponent />
    </div>
  );
}

export default OrderList;
