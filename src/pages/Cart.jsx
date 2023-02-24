import React from "react";
import CartList from "../components/Cart/CartList";
import Dashboard from "../components/Cart/Dashboard";
import useCartSelector from "../redux/selectors/useCartSelector";

export default function Cart() {
  const { cartProducts } = useCartSelector();
  return (
    <div className="flex flex-col mt-5 lg:h-[100%] md:h-[90%] lg:flex-row overflow-y-scroll scrollbar-thin">
      <div>
        <CartList />
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}
