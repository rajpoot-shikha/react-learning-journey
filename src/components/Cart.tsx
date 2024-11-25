import React from "react";

interface ICart {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: ICart) => {
  return (
    <div>
      <p>Cart Items</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Cart;
