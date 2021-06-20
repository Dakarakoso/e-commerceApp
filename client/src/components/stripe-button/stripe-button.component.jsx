import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51J10UBJRJClnUqK6ReRoYL1Z2CCVm0as9QXnuCEoPpuxT5Sf71rlL8eq85L6QAYkkJt6h3PcHkfUD4pvmjyxKCiU0046JBQJkr';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit cart.'
            );
        });
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