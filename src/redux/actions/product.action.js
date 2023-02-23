import { useDispatch } from "react-redux";
import { _setProducts } from "../state/product.state";
import APIrequest from "../../utils/config/axios.config";
import useProductSelector from "../selectors/useProductsSelector";

const useProductAction = () => {
  const dispatch = useDispatch();

  const { products } = useProductSelector();

  const getProducts = async () => {
    const data = await APIrequest.get("/");
    dispatch(
      _setProducts(
        data.data.map((product) => ({
          ...product,
          inCart: false,
        }))
      )
    );
  };

  const filterProducts = (filter) => {

  }

  const handleProductCartStatus = (product) => {
    dispatch(
      _setProducts(
        products.map((item) => (item.id === product.id ? product : item))
      )
    );
  };

  return { getProducts, handleProductCartStatus };
};

export default useProductAction;
