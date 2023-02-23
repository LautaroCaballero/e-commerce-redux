import { useSelector } from "react-redux";


const useProductSelector = () => {
    return useSelector((store) => store.product)
}

export default useProductSelector