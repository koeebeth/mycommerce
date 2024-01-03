import { useSelector } from "react-redux";
import ProductsList from "../components/ProductsList";

export default function Favorites() {
    const favorites = useSelector(state => state.favorites);
    return (
        <ProductsList products={favorites} />
    )
}