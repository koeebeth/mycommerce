import { useSelector } from "react-redux"

export default function CheckoutPage() {
    const cart = useSelector(state => state.cart);
    const total = cart.reduce((a, b) => a + (b.new_price * b.quantity), 0);

    return (
        <div className="m-10 lg:w-[900px] lg:mx-auto">
            <ul className="flex flex-col gap-4">
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
                </li>
                )) }
                <div className="flex justify-between">
                    <h2 className="text-xl">Total: <span className="text-2xl font-bold text-orange-400">{total}$</span></h2>
                    <button className="bg-orange-400 px-2 py-1 rounded-md mr-2">Go to Payment</button>
                </div>
            </ul>
        </div>
    )
}