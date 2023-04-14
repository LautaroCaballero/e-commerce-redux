import React, { useState, useEffect } from "react";
import useCartActions from "../redux/actions/cart.action";
import useProductAction from "../redux/actions/product.action";
import { getAllProducts } from "../services/axiosService";

export default function ProductItem({ product }) {
  const { handleProductCartStatus } = useProductAction();
  const { handleProductInCart } = useCartActions();

  return (
    <div className=" flex flex-col my-[2rem] w-72 p-[1rem]  mx-auto border shadow-md rounded-lg">
      <div className="h-[15rem] hover:h-[20rem] overflow-hidden transition-all transform duration-200">
        <img src={product.image} alt="" />
      </div>
      <div className=" flex flex-col space-y-2 flex-1">
        <p className="font-bold text-xl">{`${product.title.slice(
          0,
          25
        )}...`}</p>
        <p className="text-lg">{`${product.description.slice(0, 83)}...`}</p>
      </div>
      <div className="flex item-center mt-6">
        <p className="flex-1 text-2xl font-bold text-emerald-600">
          ${product.price}
        </p>
        <button
          onClick={() => handleProductInCart(product)}
          className="px-4 py-2 rounded-lg shadow-md bg-emerald-500 hover:bg-emerald-600 text-gray-200 transition-colors"
        >
          {product.inCart ? "Already in the cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
