import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import CartModal from "./CartModal";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";


export default function Header() {
    const [modalShown, setModalShown] = useState();
    const dispatch = useDispatch();
    const itemCount = useSelector(state => state.cart).reduce((prev, cur) => prev + +cur.quantity, 0);
    const isAuth = useSelector(state => state.auth).isAuthorized;

    function handleLogout() {
        dispatch(authActions.unsetAuthorize());
    }

    let content = <>
        <li>
            <Link to={'auth/login'}>Login</Link>
        </li>
        <li className="text-orange-600">
            <Link to={'auth/signup'}>Signup</Link>
        </li>
        <li>
                <button onClick={() => setModalShown(<CartModal onClose={() => setModalShown(null)} />)} className='flex items-center gap-1 hover:text-orange-500 relative'>
                    <span className="hidden md:block">My Cart</span>
                    <span className="material-symbols-outlined text-lg">
                        shopping_bag
                    </span>
                    {
                        itemCount > 0 &&
                        <span className="absolute h-4 w-4 text-xs bg-orange-600 text-white top-0 right-[-5px] rounded-full">
                            {itemCount}
                        </span>
                    }
                </button>
            </li>
    </>

    if (isAuth) {
        content = <>
            <li>
                <button onClick={handleLogout} className="hover:underline">Logout</button>
            </li>
            <li>
                <NavLink to='/favorites' className={({ isActive }) => isActive ? 'flex items-center gap-1 text-red-500' : 'flex items-center gap-1 hover:text-red-500'}>
                    <span className="hidden md:block">Favorites</span>
                    <span className="material-symbols-outlined text-lg">
                        favorite
                    </span>
                </NavLink>
            </li>
            <li>
                <button onClick={() => setModalShown(<CartModal onClose={() => setModalShown(false)} />)} className='flex items-center gap-1 hover:text-orange-500 relative'>
                    <span className="hidden md:block">My Cart</span>
                    <span className="material-symbols-outlined text-lg">
                        shopping_bag
                    </span>
                    {
                        itemCount > 0 &&
                        <span className="absolute h-4 w-4 text-xs bg-orange-600 text-white top-0 right-[-5px] rounded-full">
                            {itemCount}
                        </span>
                    }
                </button>
            </li>
        </>
    }

    return (
        <>
            {modalShown && modalShown}
            <header className="flex justify-between px-10 py-4 bg-orange-100 sticky top-0">
                <h1 className="font-bold text-xl">
                    <Link to='/'>MyCommerce</Link>
                </h1>
                <nav>
                    <ul className="flex gap-6 items-center">
                        {content}
                    </ul>
                </nav>
            </header>
        </>
    )
}