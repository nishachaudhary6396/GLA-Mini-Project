import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const OrderConfirmation = () => {
  const { state: orderDetails } = useLocation();
  const { cartItems } = useContext(ShopContext);

  if (!orderDetails) {
    return (
      <p>
        No order details available. Please complete the checkout process first.
      </p>
    );
  }

  const {
    fullName,
    phone,
    email,
    address,
    cityState,
    zipCode,
    orderItems,
    totalAmount,
  } = orderDetails;

  return (
    <div className="order-confirmation">
      <h1>Order Confirmation</h1>

      <section className="order-summary">
        <h2>Shipping Information</h2>
        <p>
          <strong>Name:</strong> {fullName}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>City/State:</strong> {cityState}
        </p>
        <p>
          <strong>Zip Code:</strong> {zipCode}
        </p>
      </section>

      <section className="order-items">
        <h2>Order Items</h2>
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>
              <p>
                <strong>Product:</strong> {item.name}
              </p>
              <p>
                <strong>Quantity:</strong> {cartItems[item.id]}
              </p>
              <p>
                <strong>Price:</strong> ${item.new_price}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="order-total">
        <p>
          <strong>Total Amount:</strong> ${totalAmount}
        </p>
      </section>
    </div>
  );
};

export default OrderConfirmation;
