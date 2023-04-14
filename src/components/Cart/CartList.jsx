import React from "react";
import useCartSelector from "../../redux/selectors/useCartSelector";
import CartItem from "./CartItem";

export default function CartList() {
  const { products } = useCartSelector();

  return (
    <div className="h-[70vh] md:h-[80vh] lg:h-[100%] lg:w-[80vw] overflow-y-auto">
      {products.map((item) => (
       <CartItem key={item.product.id} item={item} />
      ))}
    </div>
  );
}
