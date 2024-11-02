import React, { useState } from 'react'; // Import React and useState hook
import { useDispatch, useSelector } from 'react-redux'; // Import hooks from Redux
import { decreament, increament, remove } from './Store'; // Import actions from your Redux store

function Cart() {
  const dispatch = useDispatch(); // Initialize dispatch function to send actions
  const cartItems = useSelector(state => state.cart); // Retrieve cart items from the Redux store
  
  // State variables to manage coupon code and discounts
  
  const [couponCode, setCouponCode] = useState(''); // Holds the coupon code input by the user
  const [coupon, setCoupon] = useState(0); // Holds the coupon percentage value
  const [discount, setDiscount] = useState(0); // Holds the discount percentage value

  // Map through cartItems to create a list of items
  const items = cartItems.map((item, index) => {
    const itemTotalPrice = item.quantity * item.price; // Calculate total price for each item

    return (
      <li key={index}> {/* Unique key for each list item */}
        {item.name} - ${item.price.toFixed(2)} - Quantity: &nbsp;
        <button onClick={() => dispatch(increament(item))}>+</button> &nbsp; &nbsp; {/* Button to increase quantity */}
        {item.quantity} &nbsp;
        <button onClick={() => dispatch(decreament(item))}>-</button> &nbsp; {/* Button to decrease quantity */}
        <button onClick={() => dispatch(remove(item))}>Remove</button> &nbsp; &nbsp; {/* Button to remove item from cart */}
        <strong>Total: ${itemTotalPrice.toFixed(2)}</strong> {/* Display total price for the item */}
      </li>
    );
  });

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  // Function to handle applying the coupon
  const handleCoupon = () => {
    switch (couponCode) { // Check the value of couponCode
      case "NEW10":
        setCoupon(10); // Set coupon percentage for NEW10
        break;
      case "SUPER20":
        setCoupon(20); // Set coupon percentage for SUPER20
        break;
      case "FINAL30":
        setCoupon(30); // Set coupon percentage for FINAL30
        break;
      default:
        alert('Invalid coupon! Please re-enter again.'); 
        setCoupon(0); // Reset coupon if the code is invalid
    }
    setCouponCode(''); // Clear the input field after applying the coupon
  };

  // Function to calculate total amounts after discounts and couponsAAqQ
  const calculateTotal = () => {
    const discountAmount = (totalPrice * discount) / 100; // Calculate discount amount
    const fixedAmount = totalPrice - discountAmount; // Amount after applying the discount
    const finalAmount = fixedAmount - (fixedAmount * coupon / 100); // Apply coupon percentage on the fixed amount
    return { discountAmount, fixedAmount, finalAmount }; // Return calculated amounts
  };

  // Destructure the values returned from calculateTotal
  const { discountAmount, fixedAmount, finalAmount } = calculateTotal();

  // Function to handle discount button clicks
  const handleDiscount = (discountValue) => {
    setDiscount(discountValue); // Update the discount percentage
  };

  return (
    <>
      <h1 style={{ color: 'red', textAlign: 'center' }}>Cart Items</h1> {/* Title */}

      {cartItems.length > 0 ? ( // Check if there are items in the cart
        <>
          {discount > 0 && ( // Show discount message if applicable
            <p style={{ color: 'black', textAlign: 'center' }}>
              Congratulations ✨! You got {discount}% discount on your total bill.
            </p>
          )}
          <ul style={{ color: 'black' }}>{items}</ul> {/* Render list of cart items */}
          <h2 style={{ color: 'black', textAlign: 'center' }}>Total Price: ${totalPrice.toFixed(2)}</h2> {/* Display total price */}
          {/* Buttons to apply different discount percentages */}
          <button onClick={() => handleDiscount(10)}>10% discount</button> &nbsp; &nbsp;
          <button onClick={() => handleDiscount(20)}>20% discount</button> &nbsp; &nbsp;
          <button onClick={() => handleDiscount(30)}>30% discount</button> &nbsp; &nbsp;
          <p style={{ color: 'black', textAlign: 'center' }}>Discount Percentage Applied: {discount.toFixed(2)}%</p> {/* Show applied discount */}
          <p style={{ color: 'black', textAlign: 'center' }}>Discount Amount: ${discountAmount.toFixed(2)}</p> {/* Show discount amount */}
          <p style={{ color: 'black', textAlign: 'center' }}>Coupon Percentage Applied: {coupon.toFixed(2)}%</p> {/* Show coupon percentage */}

          {coupon > 0 && ( // Show message if a coupon has been applied
            <p style={{ color: 'black', textAlign: 'center' }}>
              Wow ✨! You have unlocked  extra {coupon}% discount!
            </p>
          )}
          
          {/* Input for applying a coupon */}
          <label style={{ color: 'black' }}>Apply Coupon: </label>
          <input 
            type='text' 
            value={couponCode} // Controlled input for coupon code
            onChange={(e) => setCouponCode(e.target.value)} // Update couponCode state
            placeholder='Enter coupon here' 
          />
          <button onClick={handleCoupon}>Apply Coupon</button> {/* Button to apply the coupon */}

          <h2 style={{ color: 'black', textAlign: 'center' }}>Total Bill After Discounts: ${finalAmount.toFixed(2)}</h2> {/* Display final total */}
        </>
      ) : (
        <p style={{ color: 'black', textAlign: 'center' }}>Your cart is empty 😒</p> // Message when the cart is empty
      )}
    </>
  );
}

export default Cart; // Export the Cart component
