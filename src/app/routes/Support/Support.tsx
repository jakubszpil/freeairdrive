import './Support.css';

import SupportForm from './SupportForm';

function Support() {
  return (
    <div className="support d-flex flex-column align-items-center">
      <h2 className="support-header mb-5">
        Do you have any problem? <br/>
        Look for the answer!
      </h2>
      <div className='w-75 d-flex justify-content-center text-center border-primary mb-5'>
        <div className='w-50 d-flex align-items-center flex-column support-border'>
          <div className='w-75'>
            <p className='fw-bold mb-0'>Q: Is the service payable?</p>
            <p>
              A: The basic version of the application is completely free. The module that allows you to order a vehicle to the address indicated requires subscription.
            </p>
          </div>

          <div className='w-75'>
            <p className='fw-bold mb-0'>Q: How much does the subscription cost?</p>
            <p>
              A: Subscription costs PLN 13.00 + VAT per month.
            </p>
          </div>

          <div className='w-75'>
            <p className='fw-bold mb-0'>Q: What does using the application give me?</p>
            <p>
              A: Using the application ensures efficient movement in congested city centers. In addition, one of the primary goals is to reduce exhaust emissions into the air.
            </p>
          </div>
        </div>
        


        <div className='w-50 d-flex align-items-center flex-column'>
          <div className='w-75'>
            <p className='fw-bold mb-0'>Q: I’m a provider of electrical vehicles. Can we cooperate?</p>
            <p>
            A: Sure! Please contact us by form on Cooperation page.
            </p>
          </div>

          <div className='w-75'>
            <p className='fw-bold mb-0'>Q: Who will deliver the vehicle to the address indicated?</p>
            <p>
            A: The vehicle is delivered by one of our employees.
            </p>
          </div>

          <div className='w-75'>
            <p className='fw-bold mb-0'>Q: How to start using the application?</p>
            <p>
            A: Start by creating an account in our system. Then read the dashboard and follow the alerts.
            </p>
          </div>
        </div>
        
      </div>

      <SupportForm />

    </div>
  );
}

export default Support;
