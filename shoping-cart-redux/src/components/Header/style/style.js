import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(0,0,0,0.3);
  padding: 5px 10px;
`;

export const CartDiv = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  padding: 5px 7px;
  :hover{
    cursor: pointer; 
  } 
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;
