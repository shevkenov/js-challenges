const products = new Array(1000).fill(null).map((p, i) => {
  return {
    no: i,
    name: `Product ${i}`,
  };
});

export default products;
