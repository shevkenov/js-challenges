import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border: 2px solid black;
    border-radius: 5px;
`

export const CartItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: blue;
    color: white;
    width: 100%;
    border-radius: 5px;
`
export const Item = styled.p`
    color: white;
`
export const Button = styled.button`
    background-color: 'black'
`