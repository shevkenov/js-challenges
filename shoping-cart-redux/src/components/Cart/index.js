import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart, addItemToCart } from '../../store/cartReducer'
import { CartItem, Container, Item, Button } from './style'

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
      dispatch(addItemToCart(item));
    }

    const handleRemoveItem = (id) => {
      dispatch(removeItemFromCart(id));
    }

  return (
    <Container>
        {
            items.map(i => 
            <CartItem key={i.id}>
                <Item>{i.name}</Item>
                <Item>{i.price}</Item>
                <Item>{i.quantity}</Item>
                <Item>{i.total}</Item>
                <Button onClick={() => handleAddItem(i)}>+</Button>
                <Button onClick={() => handleRemoveItem(i.id)}>-</Button>
            </CartItem>)
        }
    </Container>
  )
}

export default Cart