import './ProductDisplay.css';
import PropTypes from 'prop-types';
import star_icon from '../../Assets/star_icon.png';
import star_dull_icon from '../../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product_display">
      <div className="product_display-left">
        <div className="product_display_image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="product_display_image">
          <img
            className="product_display_main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>

      <div className="product_display-right">
        <h1>{product.name}</h1>

        <div className="product_display_right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="product_display-right-prices">
          <div className="product_display-right-prices-old">
            ${product.old_price}
          </div>
          <div className="product_display-right-prices-new">
            ${product.new_price}
          </div>
        </div>

        <div className="product_display-right-description">
          A lightwight, durable, and stylish solution for your daily commute. A
          lightwight, durable, and stylish solution for your daily commute.
        </div>

        <div className="product_display-right-size">
          <h1>Select Size</h1>
          <div className="product_display-right-size-list">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="product_display-right-category">
          <span>Category: </span> {product.category}, T-shirt, Crop Top
        </p>
        <p className="product_display-right-category">
          <span>Tags: </span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    old_price: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDisplay;
