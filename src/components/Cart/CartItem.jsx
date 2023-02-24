import React from "react";
import useCartActions from "../../redux/actions/cart.action";

const CartItem = ({ item }) => {
  const { handleProductCount } = useCartActions();

  return (
    <div className="mb-6">
      <div className="grid grid-cols-3 shadow-md py-3">
        <div className="">
          <img
            className="w-[80px] h-[80px] mt-2 ml-2 shadow-lg"
            src={item.product.image}
            alt=""
          />
        </div>
        <div className="col-span-2">
          <div className="w-50% overflow-hidden">
            <h2>{item.product.title}</h2>
          </div>
          <div className="flex justify-around mt-2">
            <p className="text-2xl">{item.product.price} c/u</p>
            <div className="">
              <button
                className="text-2xl text-red-700"
                onClick={() =>
                  handleProductCount({ ...item, count: item.count - 1 })
                }
              >
                -
              </button>
              <span className="text-2xl">{item.count}</span>
              <button
                className="mr-4 text-2xl text-emerald-700"
                onClick={() =>
                  handleProductCount({ ...item, count: item.count + 1 })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
