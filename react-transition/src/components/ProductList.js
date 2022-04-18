import React, { useState, useTransition } from "react";

import products from "../data";

const ProductList = () => {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  
  const hanldeInput = (e) => {
     startTransition(() => {
          setInputValue(e.target.value);
    })
  };

  const filterProducts = (sercheTerm) => {
    if (!sercheTerm) return products;

    return products.filter((n) => n.name.includes(inputValue));
  };
  const filteredPrd = filterProducts(inputValue);

  return (
    <div className="container">
      <input type="text" onChange={hanldeInput} value={inputValue} />
      {filteredPrd.map((p) => (
        <div key={p.no} className="card">
          {p.name}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
