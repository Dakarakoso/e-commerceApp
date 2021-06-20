import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartIconComponent, ShoppingIconComponent, ItemCountComponent } from './cart-icon.styles';
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconComponent onClick={toggleCartHidden}>
        <ShoppingIconComponent className='shopping-icon' />
        <ItemCountComponent className='item-count'>{itemCount}</ItemCountComponent>
    </CartIconComponent>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);