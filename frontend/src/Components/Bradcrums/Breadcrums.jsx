import './Breadcrums.css';
import PropTypes from 'prop-types';

import arrow_icon from '../../Assets/breadcrum_arrow.png';

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{' '}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

Breadcrums.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Breadcrums;
