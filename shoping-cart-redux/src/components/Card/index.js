import React from 'react'
import Button from '../Button/Button'
import { Container, H3, Image, Paragrpah } from './style'

import compImg from '../assets/comp.jpg';
import { addItemToCart } from '../../store/cartReducer';
import { useDispatch } from 'react-redux';

const Card = ({name, price, itemId}) => {
  const dispatch = useDispatch()
  const handleAddItem = () => { 
      dispatch(addItemToCart({
        name,price,id: itemId
      }))
  }
  return (
    <Container>
        <Image src={compImg}/>
        <H3>
            {name}
        </H3>
        <Paragrpah>
            {price} $
        </Paragrpah>
        <Button primary onClick={handleAddItem}>Add to card</Button>
    </Container>
  )
}

export default Card