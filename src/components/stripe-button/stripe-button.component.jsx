import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
// import CustomButton from "../custom-button/custom-button.component";
import * as Spinner from '../../images/spinner.gif';

import './style.scss';

const stripePromise = loadStripe('pk_test_itEEETJvPPgXFqo1mEbqb7LU00sxu7QeZE');

class StripeCheckoutButton extends React.Component {
  constructor({ amount }) {
    super();
    this.state = {
      amount,
      currencyCode: 'inr',
      currencySymbol: "₹",
      country: 'IN',
      ready: false
    }
    this.stripe = undefined;
    this.handleStripeReady();
  }

  async handleStripeReady() {
    this.stripe = await stripePromise;
    const paymentRequest = await this.stripe.paymentRequest({
      country: this.state.country,
      currency: this.state.currencyCode,
      total: {
        label: `Your payable amount is ${this.state.currencySymbol} ${this.state.amount}`,
        amount: this.state.amount * 100
      },
      requestPayerName: true,
      requestPayerEmail: true
    });
    const elements = this.stripe.elements();
    const prButton = elements.create('paymentRequestButton', { paymentRequest });
    await paymentRequest.canMakePayment();
    prButton.mount("#prButton");
    this.setState({ ready: true });
  }


  render() {
    return (
      <div className="stripe-checkout-button-container">
        <img src={Spinner} title="loading" style={{ height: '50px', width: '50px' }} alt="Loading..." />
        <label style={this.state.isReady ? { display: 'block' } : { display: 'none' }}>
          Pay Now
            <div id="prButton"></div>
        </label>
      </div>
    )
  }
}

export default StripeCheckoutButton;