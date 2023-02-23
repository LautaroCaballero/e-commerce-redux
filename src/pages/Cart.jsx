import React from "react";
import CartList from "../components/Cart/CartList";
import Dashboard from "../components/Cart/Dashboard";
import useCartSelector from "../redux/selectors/useCartSelector";

export default function Cart() {
  const { cartProducts } = useCartSelector();
  return <div className="flex mt-5 h-[500px] overflow-y-scroll scrollbar-thin">
    <CartList />
    <Dashboard />
  </div>;
}
