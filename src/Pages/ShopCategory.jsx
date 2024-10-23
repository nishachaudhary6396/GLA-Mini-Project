import './CSS/ShopCategory.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png';
import Items from '../Components/Items/Items';

const ShopCategory = ({ banner, category }) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>

      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="shopcategory-loadmore"
      >
        Explore More
      </div>
    </div>
  );
};

ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
