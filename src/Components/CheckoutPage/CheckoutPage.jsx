import './CheckoutPage.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../Assets/cart_cross_icon.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { getTotalCartAmount, all_products, cartItems } =
    useContext(ShopContext);

  const [billingDetails, setBillingDetails] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    cityState: '',
    zipCode: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePlaceOrder = () => {
    const orderDetails = {
      ...billingDetails,

      orderItems: all_products.filter((e) => cartItems[e.id] > 0),
      totalAmount: getTotalCartAmount(),
    };

    // Navigate to the Order Confirmation page with order details
    navigate('/order-confirmation', { state: orderDetails });
  };

  return (
    <>
      <div className="checkout_container">
        <div className="billing_address-container">
          {/* Billing Address */}

          <div className="billing_address-details">
            <h2>Billing Details</h2>
            <div className="billing_address-input_feilds">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="contact">
              <div className="billing_address-input_feilds phone">
                <label htmlFor="phone">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="billing_address-input_feilds email">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="billing_address-input_feilds">
              <label htmlFor="address">Address*</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contact">
              <div className="billing_address-input_feilds city">
                <label htmlFor="cityState">City/State*</label>
                <input
                  type="text"
                  id="cityState"
                  name="cityState"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="billing_address-input_feilds zip-code">
                <label htmlFor="zipCode">Zip Code*</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order dertails */}
        <div className="checkout_order_details-container">
          <h2>Order Details</h2>
          <div className="checkout_order_details">
            {all_products.map((e) => {
              const quantity = cartItems[e.id]; // Get quantity for the product

              if (quantity > 0) {
                return (
                  <div key={e.id}>
                    <div className="checkout_order_details-item">
                      <img
                        src={e.image}
                        alt=""
                        className="cartIcon-product_image"
                      />
                      <p>{e.name}</p>
                      <div className="checkout_order_details-price">
                        <p>{quantity}</p>
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
          </div>
          <div className="checkout_order_price-box">
            <div className="cart_items-total checkout_order_price">
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
              {/* <Link to="/order-confirmation">
                <button>PLACE ORDER</button>
              </Link> */}

              <button onClick={handlePlaceOrder}>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
