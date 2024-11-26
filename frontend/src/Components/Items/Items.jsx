import './Items.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Items = ({ image, name, new_price, old_price, id }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0, 0)} src={image} alt="" />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">₹{new_price}</div>
        <div className="item-price-old">₹{old_price}</div>
      </div>
    </div>
  );
};

Items.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Items;
