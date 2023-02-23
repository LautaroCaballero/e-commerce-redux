import React from "react";
import landingImg from "../../img/plataformas-de-ecommerce.png"

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 bg-red-200 h-[400px] w-[98%] mx-auto rounded-b-md mt-2">
        <div className="my-auto ml-10 ">
          <h2 className="text-red-700 font-sans font-medium">
            Join the shopping revolution today!
          </h2>
          <h1 className="font-serif font-extrabold text-5xl text-black">
            FUTURE SHOP
          </h1>
          <div className="w-[70%]">
            <p>
              From the latest fashion trends to must-have tech gadgets, we've
              got everything you need all in one place. Our prices are
              unbeatable, and our quality is unparalleled.{" "}
            </p>
          </div>
        </div>
        <div>
          <img src={landingImg} alt="" />
        </div>
      </div>
    </div>
  );
}
