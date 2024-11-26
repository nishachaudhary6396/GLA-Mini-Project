import './NewCollections.css';
import new_collections from '../../Assets/new_collections';
import Items from '../Items/Items';
import { useEffect, useState } from 'react';
import { response } from 'express';

const NewCollections = () => {

  const [new_collections, setNew_collection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/newcollections')
    .then((response) => response.json())
    .then((data) => setNew_collection(data));
  },[])
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
