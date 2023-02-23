import React from "react";
import { Link } from "react-router-dom";
import Routes from "../../models/routes.models";
import Logo from "../../img/heart-logo-colorful-by-Vexels.png";
import Cart from "../../img/Cart.png";

export default function Navbar() {
  const NavList = [
    // { name: "Products", path: Routes.PRODUCTS },
    { name: "Cart", path: Routes.CART },
  ];

  return (
    <div className="fixed grid grid-cols-3 bg-white shadow-sm w-[100%] h-14 overflow-hidden items-center font-sans text-black font-medium">
      <div className=" flex flex-1">
        <ul className="flex">
          <Link to={"/"}>
            <li className="mx-2">Home</li>
          </Link>
          <Link to={"/products"}>
          <li className="mx-2">Shop</li>
        </Link>
          <li className="mx-2">Contact us</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-10 h-10" />
        </Link>
      </div>
      <div className="">
        <ul className="flex justify-end">
          {/* {NavList.map((item) => {
            return (
              <li className="mr-7" key={item.path}>
                <Link to={item.path}></Link>
              </li>
            );
          })} */}
          <Link to={"/cart"}>
            <li className="h-7 w-7 mr-7">
              <img src={Cart} alt="" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
