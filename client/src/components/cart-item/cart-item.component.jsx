import React from 'react';

import { CartItemComponent, CartImageComponent, ItemsDetailsComponent, NameComponent } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemComponent>
        <CartImageComponent src={imageUrl} alt='item' />
        <ItemsDetailsComponent >
            <NameComponent>{name}</NameComponent>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </ItemsDetailsComponent>
    </CartItemComponent>
);

export default React.memo(CartItem);