import './CheckoutPage.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../Assets/cart_cross_icon.png';

const CheckoutPage = () => {
  const { getTotalCartAmount, all_products, cartItems } =
    useContext(ShopContext);
  return (
    <>
      <div className="checkout_container">
        <h1> This is Checkout Page</h1>
        <hr />

        {all_products.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="checkout_order-details ">
                  <img
                    src={e.image}
                    alt=""
                    className="cartIcon-product_image"
                  />
                  <p>{e.name}</p>
                  <div className="checkout_order-details-price">
                    <p>{cartItems[e.id]}</p>
                    <img className="cross_icon" src={remove_icon} alt="" />
                    <p>${e.new_price}</p>
                  </div>
                </div>

                <hr />
              </div>
            );
          }
          return null;
        })}

        <div className="cart_items-down">
          <div className="cart_items-total">
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
            <button>PAY AMOUNT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
