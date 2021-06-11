import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51J10UBJRJClnUqK6ReRoYL1Z2CCVm0as9QXnuCEoPpuxT5Sf71rlL8eq85L6QAYkkJt6h3PcHkfUD4pvmjyxKCiU0046JBQJkr';
    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWON Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
};

export default StripeCheckoutButton;