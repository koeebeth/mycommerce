import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions, favoriteActions } from "../store";
import { useState } from "react";
import SizeModal from "./SizeModal";

export default function ProductItem({ product }) {
    const {id, image, name, new_price, category} = product;
    
    const favorites = useSelector(state => state.favorites);
    const isAuth = useSelector(state => state.auth).isAuthorized;
    const [sizeShown, setSizeShown] = useState(false);
    const dispatch = useDispatch();
    
    const isFavorite = favorites.find(i => i.id === id);

    function handleAddToFav() {
        dispatch(favoriteActions.addToFav({...product}))
    }
    function handleRemoveFromFav() {
        dispatch(favoriteActions.removeFromFav(id));
    }

    function handleAddToCart(size) {
        dispatch(cartActions.addToCart({...product, id: product.id + size, size}));
    }

    return (
        <div className="w-80 p-4 bg-orange-100 rounded-2xl shadow text-center">
            {sizeShown && <SizeModal onSelect={handleAddToCart} onCancel={() => setSizeShown(false)} />}
            <Link to={`/${id}`}>
                <img src={image} alt={name} className="rounded-2xl" />
            </Link>
            <h3 className="font-bold my-4 text-lg">{name}</h3>
            <h4 className="font-bold text-orange-800">${new_price}</h4>
            <p>Category: {category}</p>
            <div className="flex justify-between mt-4">
                <button onClick={() => setSizeShown(true)} className="bg-orange-400 px-2 py-1 rounded-lg">Add to Cart</button>
                <button onClick={isFavorite ? handleRemoveFromFav : handleAddToFav}>
                    {
                        isFavorite ? <span className="material-icons text-red-500">favorite</span>
                        : <span className="material-symbols-outlined">favorite</span>
                    }
                </button>
            </div>
        </div>
    )
}