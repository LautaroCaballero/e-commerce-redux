import { useDispatch } from "react-redux";
import useCartSelector from "../selectors/useCartSelector";
import { _handleProductCart } from "../state/cart.state";
import useProductAction from "./product.action";

const useCartActions = () => {
  const dispatch = useDispatch();
  const { products } = useCartSelector();
  const { handleProductCartStatus } = useProductAction()

  const handleProductInCart = (product) => {
    const { id } = product;

    //verificar si el product actual esta en el cart
    const searchProductInCart = products.filter(
      (item) => item.product.id === id
    );
    if (!searchProductInCart[0]) {
      //agregamos productos al cart
    handleProductCartStatus({ ...product, inCart: true });

      dispatch(
        _handleProductCart([
          ...products,
          {
            product: { ...product, inCart: true },
            count: 1,
          },
        ])
      );
    } else {
      //quitamos producto del cart
      handleProductCartStatus({ ...product, inCart: false });

      dispatch(_handleProductCart(products.filter((item) => item.product.id !== id)))
    }
  };

  const handleProductCount = (product) => {

    if(product.count === 0) {
      return handleProductInCart(product.product)
    }

    dispatch(
      _handleProductCart(
        products.map((item) => item.product.id === product.product.id ? product : item)
      )
    )
  }

return {handleProductInCart, handleProductCount} 
};

export default useCartActions;