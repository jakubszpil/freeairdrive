import './WorkerView.css';
import WorkerViewComponent from './WorkerViewComponent';

import {ReactComponent as Image} from 'images/bro.svg';

function WorkerView() {
  return (
    <div className="orderlist d-flex flex-column align-items-center">
      <h2 className='orderlist-header'>Hello, name_surname</h2>
      <div className='d-flex w-75'>
        <div className='w-50'>
          <Image />
        </div>

        <div className='d-flex flex-column justify-content-center align-items-center w-50 fw-bold'>
          <h1 className='text-secondary'>These are your orders</h1>
          <p>Please complete them in time!</p>
        </div>
      </div>
      <div className='d-flex justify-content-around w-75 mt-5 mb-5'>
        <h4>Purchaser</h4>
        <h4>Address </h4>
        <h4>Vehicle type</h4>
        <h4>Delivery time</h4>
      </div>
      <WorkerViewComponent />
      <WorkerViewComponent />
      <WorkerViewComponent />
      <WorkerViewComponent />
    </div>
  );
}

export default WorkerView;
