import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { CardContainer } from "../components/Card/CardContainer";
import Cart from "../components/Cart";
import Header from "../components/Header/Header";

const HomePage = ({itemList}) => {
  const {items, isCartVisible} = useSelector(state => state.cart)

  return (
    <>
      <Header />
      <CardContainer>
        {itemList.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            price={card.price}
            itemId={card.id}
          />
        ))}
      </CardContainer>
      {!!items.length && isCartVisible && <Cart />}
    </>
  );
};

export default HomePage;
