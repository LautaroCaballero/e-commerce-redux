import React, { useState, useEffect } from "react";
import useCartSelector from "../../redux/selectors/useCartSelector";

export default function Dashboard() {
  const [count, setCount] = useState();
  const [totalPrice, settotalPrice] = useState();
  const { products } = useCartSelector();

  useEffect(() => {
    let _count = 0;
    let _totalprice = 0;

    products.forEach((product) => {
      _count += product.count;
      _totalprice += product.product.price * product.count;
    });
    setCount(_count);
    settotalPrice(_totalprice);
  }, [products]);

  return (
    <div className="h-[30vh] md:h-[20vh] lg:h-[100%] lg:w-[100%] bg-red-200">
      <div className="flex justify-between p-5 lg:p-11 shadow-md">
        <p>Count of product:</p>
        <p>
          <span>{count}</span>
        </p>
      </div>
      <div className="flex justify-between p-5 lg:p-10">
        <p>Total price:</p>
        <p>
          <span>{totalPrice}</span>
        </p>
      </div>
      <div className="flex justify-center pb-3">
        <button className="w-[250px] lg:w-[150px] h-[40px] bg-red-400 rounded-sm shadow-md">Buy now</button>
      </div>
    </div>
  );
}
