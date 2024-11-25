import React from "react";

interface INavBarProps {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: INavBarProps) => {
  return <div>Cart Items: {cartItemsCount}</div>;
};

export default NavBar;
