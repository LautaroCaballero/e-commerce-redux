import { useSelector } from "react-redux";


const useCartSelector = () => {
    return useSelector((store) => store.cart)
}

export default useCartSelector