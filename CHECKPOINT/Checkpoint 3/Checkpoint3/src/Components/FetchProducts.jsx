import React, { useEffect, useState } from "react";
import Product from "./Product";

function FetchProducts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      if (!res.ok) {
        throw new Error("errore nel fetch");
      }
      const resData = await res.json();
      setProducts(resData);
    } catch (error) {
      console.error(error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(category);

  function handlechangeAll() {
    setCategory(products);
  }

  function handlechangeMen() {
    const men = products.filter((e) => {
      return e.category === "men's clothing"
    })
    setCategory(men);
  }

  function handlechangeWomen() {
    const women = products.filter((e) => {
      return e.category === "women's clothing"
    })
    setCategory(women);
  }

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Errore nel Fetch</h2>}
      <button onClick={handlechangeAll}>ALL/</button>
      <button onClick={handlechangeMen}>men's clothing/</button>
      <button onClick={handlechangeWomen}>jewelery</button>

      {products &&
        category.map((e) => (
          <Product title={e.title} price={e.price} key={e.id} />
        ))}
    </div>
  );
}

export default FetchProducts;
