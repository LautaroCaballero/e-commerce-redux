import React, {useState, useEffect} from "react";
import useCartSelector from "../../redux/selectors/useCartSelector";

export default function Dashboard() {

  const [count, setCount] = useState()
  const [totalPrice, settotalPrice] = useState()
  const { products } = useCartSelector();

  useEffect(() => {
    let _count = 0;
    let _totalprice = 0;

    products.forEach((product) => {
      _count += product.count;
      _totalprice += product.product.price * product.count
    })
    setCount(_count);
    settotalPrice(_totalprice)

  }, [products]);

  return (
    <div className="mt-5 mr-2 absolute right-4">
      <h1>Cart</h1>
      <p>
        Count of product: <span>{count}</span>
      </p>
      <p>
        Total price: <span>{totalPrice}</span>
      </p>
    </div>
  );
}
