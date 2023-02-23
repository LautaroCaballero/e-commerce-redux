import React, { useState, useEffect } from "react";
import ProductItem from "../pure/ProductItem";
import useProductAction from "../redux/actions/product.action";
import useProductSelector from "../redux/selectors/useProductsSelector";
import RedCross from "../img/RedCross.webp"

export default function ProductContainer() {
  const { getProducts } = useProductAction();
  const { products } = useProductSelector();

  const [filter, setFilter] = useState("");

  const filterItems = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, []);

  return (
    <div>
      <ul className="flex justify-end mr-20 mt-7 font-semibold">
        <li className="mx-2">
          <button onClick={() => filterItems("jewelery")}>Jewelery</button>
        </li>
        <li className="mx-2">
          <button onClick={() => filterItems("men's clothing")}>Men's</button>
        </li>
        <li className="mx-2">
          <button onClick={() => filterItems("women's clothing")}>
            Women's
          </button>
        </li>
        <li className="mx-2">
          <button onClick={() => filterItems("electronics")}>
            Electronics
          </button>
        </li>
        <li><img className="w-3 h-3 mt-[6.5px] cursor-pointer" onClick={() => filterItems('')} src={RedCross} alt="" /></li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filter !== ""
          ? products
              .filter((item) => item.category === filter)
              .map((filteredItem) => {
                return (
                  <ProductItem product={filteredItem} key={filteredItem.id} />
                );
              })
          : products.map((item, index) => {
              return <ProductItem product={item} key={item.id} />;
            })}
      </div>
    </div>
  );
}
