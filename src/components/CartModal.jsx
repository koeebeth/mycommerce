import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store";
import { useNavigate } from "react-router-dom";

//ADD CLOSING MODAL ON CHECKOUT

export default function CartModal({ onClose }) {
    const cart = useSelector(state => state.cart);
    const total = cart.reduce((a, b) => a + (b.new_price * b.quantity), 0);
    const isAuth = useSelector(state => state.auth).isAuthorized;
    const navigate = useNavigate();

    const dispatch = useDispatch()

    function handleIncrementItem(id) {
        dispatch(cartActions.incrementItem(id));
    }
    
    function handleDecrementItem(id) {
        dispatch(cartActions.decrementItem(id));
    }

    function handleCheckout() {
        if(isAuth) {
            navigate('checkout');
        }
        else {
            navigate('auth/login');
        }
        onClose();
    }

    return (
        <Modal onClose={onClose}>
            <ul className="flex flex-col gap-4 mb-6">
                {cart.length === 0 ? <div className="h-28 w-80 text-center">
                    <p className="text-stone-500">No items yet.</p>
                    </div>
                : cart.map(i => (
                <li key={i.id} className="flex justify-between items-center bg-stone-200 p-4 gap-4 rounded-lg">
                    <div className="flex gap-8 items-center">
                        <img className='h-32 rounded-xl' src={i.image} alt={i.name} />
                        <div>
                            <h3 className="font-bold">{i.name}</h3>
                            <p className="font-oblique text-orange-800">{i.size.toUpperCase()}</p>
                            <p className="font-oblique text-stone-400">{i.quantity} x {i.new_price}$</p>
                        </div>
                    </div>
                    <div className=" h-8 flex items-center justify-center rounded-xl overflow-hidden bg-white text-center">
                        <button onClick={() => handleDecrementItem(i.id)} className="w-8 h-8 font-bold text-white bg-orange-400">-</button>
                        <p className="w-8">{i.quantity}</p>
                        <button onClick={() => handleIncrementItem(i.id)} className="w-8 h-8 font-bold text-white bg-orange-400">+</button>
                    </div>
                </li>
                )) }
            </ul>
            <div className="flex justify-between">
                <span>
                    <button className="bg-orange-400 px-2 py-1 rounded-md mr-2" onClick={onClose}>Close</button>
                    {cart.length > 0 && <button onClick={handleCheckout} className=" text-white bg-orange-600 px-2 py-1 rounded-md">Checkout</button>}
                </span>
                <h2 className="text-xl">Total: <span className="text-2xl font-bold text-orange-400">{total}$</span></h2>
            </div>
        </Modal>
    )
}