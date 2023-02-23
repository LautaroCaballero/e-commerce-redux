import React from "react";
import useCartActions from "../../redux/actions/cart.action";

const CartItem = ({ item }) => {
  const { handleProductCount } = useCartActions();

  return (
    <div className="grid grid-cols-3 w-[60%] h-[100px] shadow-lg items-center my-4 mx-auto border-r border-b border-l border-gray-400 border-t lg:border-gray-400 bg-white rounded-b lg:rounded-r justify-between leading-normal font-sans font-semibold">
      <div className="h-[100%]">
        <img className="w-[80px] h-[80px] mt-2 ml-2 shadow-lg" src={item.product.image} alt="" />
      </div>
      <div className="flex-1">
        <h2>{item.product.title}</h2>
      </div>
      <div className="flex justify-end space-x-10">
        <p className="text-2xl">{item.product.price} c/u</p>
        <div className="flex ">
          <button className="text-2xl text-red-700"
            onClick={() =>
              handleProductCount({ ...item, count: item.count - 1 })
            }
          >
            -
          </button>
          <span className="text-2xl">{item.count}</span>
          <button className="mr-4 text-2xl text-emerald-700"
            onClick={() =>
              handleProductCount({ ...item, count: item.count + 1 })
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
