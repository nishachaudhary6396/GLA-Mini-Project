import './Popular.css';
import Items from '../Items/Items';
import { useEffect, useState } from 'react';
import { response } from 'express';

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:3000/popularinwomen')
    .then((response) => response.json())
    .then((data) => setPopularProducts(data));
  },[])

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {popularProducts.map((product, i) => (
          <Items
            key={i}
            id={product.id}
            image={product.image}
            name={product.name}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
