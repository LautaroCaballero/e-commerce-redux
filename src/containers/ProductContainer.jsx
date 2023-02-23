// import React, { useState, useEffect } from "react";
// import Product from "../pure/ProductItem";
// import { getAllProducts } from "../services/axiosService";

// export default function ProductContainer() {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);

//   const obtainAllProducts = () => {
//     getAllProducts()
//       .then((response) => {
//         if (response.status === 200) {
//           setProducts(response.data);
//         }
//       })
//       .catch((error) => {
//         alert(`wrong`);
//       })
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     obtainAllProducts();
//   }, []);
//   return <div className="grid grid-rows-4 grid-flow-col gap-4">  
//     {products.map((product, index) => {
//         return(
//             <Product product={product} key={product.id} />
//         )
//     })}
//   </div>;
// }
