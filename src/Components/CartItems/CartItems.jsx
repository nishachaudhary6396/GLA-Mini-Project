import './CartItems.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../Assets/cart_cross_icon.png';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cart_items">
      <div className="cart_items-format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart_items-format cart_items-format_main">
                <img src={e.image} alt="" className="cartIcon-product_image" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart_items-quantity_btn">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartIcon-remove_icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cart_items-down">
        <div className="cart_items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart_items-total_items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart_items-total_items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="cart_items-total_items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to="/checkout">
            <button> PROCEED TO CHECKOUT</button>
          </Link>
        </div>

        <div className="cart_items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart_items-promocode-box">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
