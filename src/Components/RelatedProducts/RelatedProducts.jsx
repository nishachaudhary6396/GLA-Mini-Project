import './RelatedProducts.css';
import Items from '../Items/Items';
import data_products from '../../Assets/data';

const RelatedProducts = () => {
  return (
    <div className="related_products">
      <h1>Related Products</h1>
      <hr />
      <div className="related_products-items">
        {data_products.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
