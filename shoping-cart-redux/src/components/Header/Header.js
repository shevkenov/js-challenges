import React from 'react'
import { Container, CartDiv, Heading } from './style/style';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../store/authReducer';
import {showCart} from '../../store/cartReducer';

function Header() {
  const {quantity} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(authLogout())
  }

  const handleShowCart = () => {
    dispatch(showCart())
  }

  return (
    <Container>
        <Heading>
            Redux shoping app
        </Heading>
        <CartDiv onClick={handleShowCart}>
            Cart: {quantity} items
        </CartDiv>
        <Button onClick={handleLogout}>
            Logout
        </Button>
    </Container>
  )
}

export default Header