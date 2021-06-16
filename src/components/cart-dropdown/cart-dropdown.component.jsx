import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import toggleCartHidden from '../../redux/cart/cart.actions';
import CartDropdownContainer from './cart-dropdown.container';
import { CartDropdownComponent, EmptyMessageContainer, CartDropDownButton, CartItemsComponent } from './cart.dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownComponent>
        <CartItemsComponent>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )}
        </CartItemsComponent>
        <CartDropDownButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CartDropDownButton>
    </CartDropdownComponent>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
