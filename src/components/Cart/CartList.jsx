import React from "react";
import useCartSelector from "../../redux/selectors/useCartSelector";
import CartItem from "./CartItem";

export default function CartList() {
  const { products } = useCartSelector();

  return (
    <div className="flex-1">
      {products.map((item) => (
       <CartItem key={item.product.id} item={item} />
      ))}
    </div>
  );
}
