import { useParams } from "react-router-dom"
import DUMMY_PRODUCTS from "../db"
import { cartActions } from "../store";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function DetailPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const product = DUMMY_PRODUCTS[DUMMY_PRODUCTS.findIndex(i => i.id == params.id)];

    function handleAddToCart() {
        if (!selected) {
            setError('Please select size');
            return;
        }
        setError('')
        dispatch(cartActions.addToCart({...product, id: product.id + selected, size: selected}));
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 w-fit mx-auto mt-10 mx-10 lg:w-[900px] lg:mx-auto">
            <img src={product.image} alt={product.name} className="rounded-xl"/>
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-orange-600 mb-2">{product.name}</h2>
                <h3 className="mb-4 text-orange-300">Seller: seller</h3>
                <p className="text-stone-400 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis blanditiis impedit quam rem inventore explicabo perferendis deleniti quia. Incidunt accusantium expedita at saepe, laboriosam omnis et quae voluptatem odit labore?</p>           
                {error && <p className="text-orange-400">{error}</p>}
                <form className="relative flex flex-wrap gap-4 items-center relative mt-2">
                    <label className={selected === 'xs' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                        <input onClick={() => setSelected('xs')} type="radio" name="size" value={'xs'} className="mr-2 absolute opacity-0" />
                        X-Small
                    </label>
                    <label className={selected === 's' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                        <input onClick={() => setSelected('s')} type="radio" name="size" value={'s'} className="mr-2 absolute opacity-0"/>
                        Small
                    </label>
                    <label className={selected === 'm' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                        <input onClick={() => setSelected('m')} type="radio" name="size" value={'m'} className="mr-2 absolute opacity-0"/>
                        Medium
                    </label>
                    <label className={selected === 'l' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                        <input onClick={() => setSelected('l')} type="radio" name="size" value={'l'} className="mr-2 absolute opacity-0"/>
                        Large
                    </label>
                    <label className={selected === 'xl' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                        <input onClick={() => setSelected('xl')} type="radio" name="size" value={'xl'} className="mr-2 absolute opacity-0"/>
                        X-Large
                    </label>
                </form>
                <button onClick={handleAddToCart} className="bg-orange-400 px-2 py-1 rounded-lg mt-8">Add to Cart</button>

            </div>
        </div>
    )
}